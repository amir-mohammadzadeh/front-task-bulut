import DashbordPage from "./Pages/DashbordPage/DashbordPage";

export const Routes= [
    {path:'/' , element: <DashbordPage /> },
    {path:'/report' , element: <UnAvaliablePage /> },
    {path:'/bank' , element: <UnAvaliablePage /> },
    {path:'/email' , element: <UnAvaliablePage /> },
    {path:'/group' , element: <UnAvaliablePage /> },
    {path:'/list' , element: <UnAvaliablePage /> },
    {path:'/finance' , element: <UnAvaliablePage /> },
    {path:'/setting' , element: <UnAvaliablePage /> },
    {path:'*' , element: <div className="PAGE_404"> 404 Error </div> }
]

function UnAvaliablePage (){
    return  <div className="PAGE_UnAvailable"> Page is not ready ! </div>
}