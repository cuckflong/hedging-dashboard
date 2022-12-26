module.exports = {
  arrowParens: "avoid",
  trailingComma: "es5",
  importOrder: [
    "react",
    "^@core/(.*)$",
    "next(.*)",
    "<THIRD_PARTY_MODULES>",
    "^@server/(.*)$",
    "^@ui/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};
