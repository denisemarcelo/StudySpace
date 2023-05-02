import ExploreUsersFeed from "@/components/ExploreUsersFeed";
import Header from "@/components/Header";


// export async function getServerSideProps(context: NextPageContext) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }

const ExploreUsers = () => {
    return ( 
      <>
        <Header showBackArrow label="Explore Users" />
        <ExploreUsersFeed />
      </>
     );
  }
   
  export default ExploreUsers;