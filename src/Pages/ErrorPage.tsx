import { Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Box padding={5} >
          <Heading >Oops...</Heading>
          <Text >
            {isRouteErrorResponse(error) ? "Page not found" : "Request failed with status 404"}
          </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
