function checkUserRole(){
  return "admin"
}

interface LayoutProps {
  user: React.ReactNode;
  admin: React.ReactNode; 
}
export default function Layout({user, admin}: LayoutProps){
  const role = checkUserRole()
  return(
    <div>
      {role === "admin" ? admin : user}
    </div>
  )
}