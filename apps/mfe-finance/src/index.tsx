import("./bootstrap").then((module) => {
  const { mount } = module;
  const devRoot = document.getElementById("_finance-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
});
