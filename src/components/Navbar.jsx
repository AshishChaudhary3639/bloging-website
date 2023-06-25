import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showFav, setShowFav] = useState(false);
  const [favouriteEle, setFavouriteEle] = useState(
    JSON.parse(localStorage.getItem("favourite")) || []
  );

  return (
    <Flex
      w={`100%`}
      height={`10vh`}
      bgColor={`#141414`}
      color={`white`}
      justifyContent={`space-between`}
      alignItems={`center`}
      p={`0px 3rem`}
    >
      <Box>Ashish Blog</Box>
      <Flex gap={`2rem`}>
        <Box>About</Box>
        <Box position={`relative`}>
          <Box
            onClick={() => setShowFav(!showFav)}
            _hover={{
              cursor: "pointer",
              bgColor: "whitesmoke",
              borderRadius: "5px",
              color: "black",
            }}
          >
            Favourite
          </Box>
          {showFav ? (
            <Box
              w={`300px`}
              position={`absolute`}
              color={`black`}
              ml={"-7rem"}
              zIndex={`999`}
            >
              {favouriteEle &&
                favouriteEle?.map((e,i) => (
                  <Link key={i} to={`/posts/${e.id}`}>
                    <Box
                      border={`1px solid lightgray`}
                      borderRadius={`5px`}
                      bgColor={`white`}
                      p={`5px`}
                    >
                      <Text key={e.id}>{e.title}</Text>
                    </Box>
                  </Link>
                ))}
            </Box>
          ) : (
            ""
          )}
        </Box>
        <Box>Contect US</Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
