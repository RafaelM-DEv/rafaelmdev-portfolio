import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function BlogSkill(props) {
  return (
    <Paper elevation={2} className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-slate-600">
        <div className="mb-4 sm:mb-0 sm:mr-6">
          <img
            src={props.icon || "/placeholder.svg"}
            alt={props.title}
            className="w-16 sm:w-20 md:w-24"
          />
        </div>
        <div className="flex-1">
          <Typography
            variant="h6"
            component="h3"
            className="font-bold text-slate-600 mb-2 text-center sm:text-left"
          >
            {props.title}
          </Typography>
          <Typography variant="body2" className="text-justify mb-4 pr-10">
            {props.description}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                value={props.progress}
                color="primary"
              />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">
                {props.progress}%
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </Paper>
  );
}

export default BlogSkill;
