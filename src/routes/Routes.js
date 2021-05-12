import React from "react";
import Home from "../pages/Home";
import Schedule from "../pages/Schedule";
import ExamSchedule from "../pages/ExamSchedule";
import Profile from "../pages/Profile";
import StudyResult from "../pages/StudyResult";
import Scores from "../pages/Scores";

const routes = [
  {
    path: "/",
    exact: true,
    main: ({ history }) => <Home />,
  },
  {
    path: "/schedule",
    exact: false,
    main: () => <Schedule />,
  },
  {
    path: "/exam-schedule",
    exact: false,
    main: () => <ExamSchedule />,
  },
  {
    path: "/profile",
    exact: false,
    main: () => <Profile />,
  },
  {
    path: "/study-results",
    exact: false,
    main: () => <StudyResult />,
  },
  {
    path: "/scores",
    exact: false,
    main: () => <Scores />,
  },
];

export default routes;
