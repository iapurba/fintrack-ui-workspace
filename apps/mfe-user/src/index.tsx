import("./bootstrap").then((module) => {
  const { mount } = module;
  const devRoot = document.getElementById("_user-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
});
