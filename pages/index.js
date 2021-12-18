import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";
import ChangeUsernameModal from "../components/ChangeUsernameModal";
import { profileModalState } from "../atoms/ModalAtom";
import Messages from "../components/Messages";
import ProfilePictureModal from "../components/ProfilePictureModal";

export default function Home() {
  const [modal, setModal] = useRecoilState(modalState);
  const [profilePic, setProfilePic] = useRecoilState(profileModalState);
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-metaverse bg-no-repeat bg-cover bg-center flex max-h-screen">
      <Header />
      <Messages />
      {modal && <ChangeUsernameModal />}
      {profilePic && <ProfilePictureModal />}
    </div>
  );
}
