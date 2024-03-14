import { useContext } from "react";

export const useAuthContext = () => {
  // const context = useContext(AuthContext);
  //  굳이 AuthContext를 여기에 가져와서 컨텍스트를 담는 건 커스텀훅을 만들어 리액트 렌더 사이클에 맞추기 위함일까?
  const context = useContext();

  if (!context) {
    throw new Error("useAuthContext context must be used inside AuthProvider");
  }

  return context;
};
