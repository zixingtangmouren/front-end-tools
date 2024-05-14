const n = {};
function t(l, s = []) {
  return n.readdirSync(l).forEach((c) => {
    const e = n.resolve(l, c);
    n.lstatSync(e).isFile() ? s.push(e) : t(e, s);
  }), s;
}
function i({ targetDir: l }) {
  const s = t(l);
  return console.log("allFilePaths", s), {
    name: "scan-useless-files",
    resolveId(o) {
      console.log("resolveId", o);
    }
  };
}
export {
  i as default
};
