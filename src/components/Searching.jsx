import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getBlogPostsBySearch } from "../redux/appReducer/action";

const Searching = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    if (search) {
      dispatch(getBlogPostsBySearch(search));
    };
    
    setSearch('')

  };
  return (
    <Box w={`100%`} p={`1rem`}>
      <Flex w={`60%`} justifyContent={`center`} alignItems={`center`}>
        <Input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Flex>
    </Box>
  );
};

export default Searching;
