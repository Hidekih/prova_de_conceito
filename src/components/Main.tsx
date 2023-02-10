import { useGitHubContext, User } from "@/context/githubUser";

export const Main = ({ user: aUser }: {user: User}) => {
  console.log("Main rendered")
  const { user, fetchUser } = useGitHubContext();

  fetchUser(aUser);

  return (
    <div>
      <h1>{user?.name}</h1>
    </div>
  )
}
