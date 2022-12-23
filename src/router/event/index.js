export default [
  {
    path: "/events/:id",
    name: "eventDetails",
    component: () => import("../../views/Event.vue"),
  },
];
