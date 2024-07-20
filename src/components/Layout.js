export const Layout=()=>{
    return (
        <>
          {/*header here*/ }
          <div className='max-w-4xl mx-auto p-4'>
            <Outlet />
          </div>
        </>
      );
}