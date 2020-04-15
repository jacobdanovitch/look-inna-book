module.exports = {
    "schema": [
        {
            "http://look-inna-book-postgres-hasura.eastus.azurecontainer.io/v1/graphql": {}
        }
    ],
    "documents": [
        "./src/**/*.tsx",
        "./src/**/*.ts",
        "!*.generated.graphql",
        "!./src/types/generated/*ts*",
        "!./src/**/BookSearch.tsx"
    ],
    "overwrite": true,
    "generates": {
        "./src/types/generated/hasuraTypes.tsx": {
            "plugins": [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo"
            ],
            "config": {
              "skipTypename": false,
              "withHooks": true,
              "withHOC": false,
              "withComponent": false
            }
        },
        "./graphql.schema.json": {
          "plugins": [
                "introspection"
          ]
        }
    }
};