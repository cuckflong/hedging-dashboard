module.exports = {
  arrowParens: "avoid",
  trailingComma: "es5",
  importOrder: [
    "react",
    "^@core/(.*)$",
    "next(.*)",
    "@mui/(.*)",
    "<THIRD_PARTY_MODULES>",
    "^@server/(.*)$",
    "^@ui/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};
