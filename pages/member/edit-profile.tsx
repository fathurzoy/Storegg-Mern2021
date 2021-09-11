import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/atoms/Input";
import SideBar from "../../components/organisms/SideBar";
import { JWTPayloadTypes, UserTypes } from "../../services/data-types";
import { updateProfile } from "../../services/member";

interface UserStateTypes {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: any;
}

const EditProfile = () => {
  const [user, setUser] = useState<UserStateTypes>({
    id: "",
    name: "",
    email: "",
    phone: "",
    avatar: "",
  });
  const [imagePreview, setImagePreview] = useState("/");
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token); //atob ugly to beautifull
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      // console.log("jwtToken", payload);
      const userFromPayload: UserTypes = payload.player;
      setUser(userFromPayload);
      // console.log("user", userFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    // console.log("edit user: ", user);
    const data = new FormData();

    data.append("image", user.avatar);
    data.append("name", user.name);
    const response = await updateProfile(data, user.id);
    if (response.error) {
      toast.error(response.message);
    } else {
      // console.log("data: ", response);
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };

  return (
    // <!-- Transactions Detail -->
    <section className="edit-profile overflow-auto">
      <main className="main-wrapper">
        <SideBar activeMenu="settings" />
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                {/* <div className="position-relative me-20">
                  <img
                    src="/img/avatar-1.png"
                    width="90"
                    height="90"
                    className="avatar img-fluid"
                  />
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    <img src="/icon/upload.svg" alt="icon upload" />
                  </div>
                </div> */}
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview === "/" ? (
                      <img
                        // src="/icon/upload.svg"
                        src={user.avatar}
                        alt="icon upload"
                        width={90}
                        height={90}
                        style={{ borderRadius: "100%" }}
                      />
                    ) : (
                      <img
                        // src="/icon/upload.svg"
                        src={imagePreview}
                        alt="icon upload"
                        width={90}
                        height={90}
                        style={{ borderRadius: "100%" }}
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      // console.log(event.target.files[0]);
                      const img = event.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      return setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  value={user.name}
                  onChange={(event) =>
                    setUser({
                      ...user,
                      name: event.target.value,
                    })
                  }
                />
              </div>
              <div className="pt-30">
                <Input label="Email Address" disabled value={user.email} />
              </div>
              {/* <div className="pt-30">
                <Input label="Phone" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default EditProfile;
