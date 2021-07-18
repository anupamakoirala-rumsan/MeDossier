export function useMoralis() {
    // Moralis Initialization
    let Moralis;
    if (typeof window !== `undefined`) {
      Moralis = require("moralis");
      Moralis.initialize("aDx2D8m42ywNQngsURVJZDGtB9KoFtE0hJKEolna");
      Moralis.serverURL = "https://tklmbqoeve2o.usemoralis.com:2053/server";
      
    }
    return { Moralis };
  }