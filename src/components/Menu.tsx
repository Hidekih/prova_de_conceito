import { useGitHubContext } from "@/context/githubUser";
import Link from "next/link"
import { memo } from "react";

const MenuContent = () => {
  const { user } = useGitHubContext();

  return (
    <div>
      <ul>
        <li>
          <Link href={"/diego3g"}>
            { user?.login == "diego3g" ? (
              <strong>diego3g</strong>
            ) : (
              <span>diego3g</span>
            )}
          </Link>
        </li>
        <li>
          <Link href={"/filipedeschamps"}>
            { user?.login == "filipedeschamps" ? (
              <strong>filipedeschamps</strong>
            ) : (
              <span>filipedeschamps</span>
            )}
          </Link>
        </li>
        <li>
          <Link href={"/Hidekih"}>
            { user?.login == "Hidekih" ? (
              <strong>Hidekih</strong>
            ) : (
              <span>Hidekih</span>
            )}
          </Link>
        </li>
        <li>
          <Link href={"/NeoFrosch"}>
            { user?.login == "NeoFrosch" ? (
              <strong>NeoFrosch</strong>
            ) : (
              <span>NeoFrosch</span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export const Menu = memo(MenuContent)
