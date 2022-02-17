import Link from "next/link"

import { FontSizeType } from "@/styles/theme"

import Text from "../Text"

interface LogoProps {
  isInverse?: boolean
  size?: FontSizeType
  redirectPath?: string
}

const Logo: React.FC<LogoProps> = ({
  redirectPath = "/home",
  size = "title.sm",
  isInverse = false
}) => {
  return (
    <Link href={redirectPath}>
      <a className="cursor-pointer text-decoration-none">
        <Text
          as="h1"
          size={size}
          colorKey={isInverse ? "portfolio-light" : "portfolio-dark"}
          fontWeight="bold"
        >
          Portfolio
        </Text>
      </a>
    </Link>
  )
}

export default Logo
