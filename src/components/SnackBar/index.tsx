import { Snackbar, SnackbarProps } from "@material-ui/core"
import { Color } from "@material-ui/lab"

import { Alert } from "./styles"

interface OwnProps {
  message: string
  severity: Color
  duration?: number
}

type SnackBarProps = OwnProps & SnackbarProps

const SnackBar: React.FC<SnackBarProps> = ({
  message,
  severity,
  duration = 4000,
  ...rest
}) => {
  return (
    <Snackbar
      autoHideDuration={duration}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      {...rest}
    >
      <Alert severity={severity} variant="filled" elevation={4}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default SnackBar
