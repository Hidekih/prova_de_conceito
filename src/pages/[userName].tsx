import { Main } from "@/components/Main";
import { Menu } from "@/components/Menu";
import { GitHubContextProvider, User } from "@/context/githubUser"
import axios from "axios";
import type { GetServerSideProps } from "next"
interface PageProps {
    user: User;
}

export default function UserPage({ user }: PageProps) {
  return (
      <GitHubContextProvider>
        <div style={{ height: "100vh", width: "100vw" }}>
          <Main user={user}/>

          <Menu />
        </div>
      </GitHubContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async(context) => {
    const userName = String(context.query.userName);

    const { data: user } = await axios.get<User>(`https://api.github.com/users/${userName}`)

    return {
      props: {
        user
      },
    }
  }
