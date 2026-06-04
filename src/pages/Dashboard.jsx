import { Outlet } from "react-router";

const Dashboard = () => {


  return <div>
    <div className="p-5">
      <h2 className="text-4xl font-bold mb-1">Welcome to the Dashboard</h2>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, mollitia illo autem deserunt impedit iusto molestiae iste blanditiis corporis earum?</p><br />
      <Outlet/>
    </div>
  </div>;
};

export default Dashboard;
