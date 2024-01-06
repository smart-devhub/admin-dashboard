import AuthHeader from "../component/Header/authHeader";

const AuthLayout = ({ children }) => {
    return (
      <div>
         {/* <AuthHeader/> */}
        <main>{children}</main>
   
      </div>
    );
  };
  
  export default AuthLayout;