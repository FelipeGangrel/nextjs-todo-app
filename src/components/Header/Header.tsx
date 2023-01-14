import { DarkModeToggler } from "@/components/DarkModeToggler";
import * as S from "./Header.styles";

const Header: React.FC = () => {
  return (
    <S.Header>
      <div>logo</div>
      <div>menu</div>
      <div>
        <DarkModeToggler />
      </div>
    </S.Header>
  );
};

export default Header;
