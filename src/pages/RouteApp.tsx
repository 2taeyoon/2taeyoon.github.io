import React from "react";
//import MyImage from "../../public/logo192.png";

const RouteApp: React.FC = () => {
  return (
    <div className="RouteApp">
      {/* <img
        src={MyImage}
        alt="img"
      /> */}
      <div>📸이미지를 출력해보자📸</div>
    </div>
  );
};




// const Advertisement = lazy(() => import("./Admin/Advertisement.jsx"));
// const routes = [
//   // 모든 사용자가 접근 가능
//   { path: "/", element: <NewsRoom /> },
//   { path: "/policy/1", element: <One /> },
//   { path: "/community", element: <Community /> },
//   { path: "/find/password", element: <FindPassword /> },
//   { path: "/find/passwordnext", element: <FindPasswordNext /> },
//   { path: "/kakaologin", element: <KakaoLogin /> },
//   { path: "/naverlogin", element: <NaverLogin /> },

//   // 로그인하지 않은 사용자만 접근 가능
//   { path: "/login", element: <Login />, condition: user => !user },
//   { path: "/register", element: <Register />, condition: user => !user },
//   { path: "/signup", element: <SignUp />, condition: user => !user },
//   { path: "/signupnext", element: <SignUpNext />, condition: user => !user },
//   { path: "/find/id", element: <FindId />, condition: user => !user },
//   { path: "/snsloginnext", element: <SnsLoginNext />, condition: user => !user },

//   // 로그인한 사용자만 접근 가능
//   { path: "/community/:id", element: <ReadingPage />, condition: user => user },
//   { path: "/my", element: <My />, condition: user => user },
//   { path: "/my/*", element: <My />, condition: user => user },

//   // 로그인한 사용자만 접근 가능
//   { path: "/community/write", element: <WritingPage />, condition: user => user },

//   // 관리자만 접근 가능
//   { path: "/admin/advertiser", element: <Advertiser />, condition: user => user && user.username === "관리자" },
//   { path: "/admin/advertisement/:id", element: <Advertisement />, condition: user => user && user.username === "관리자" },
// ];

export default RouteApp;
