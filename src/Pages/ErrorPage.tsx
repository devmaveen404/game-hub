import { Heading, Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // invalid route error
  const error = useRouteError();
  return (
    <>
      <Box padding={5} >
        <Heading >Oops...</Heading>
        <Text >
          {isRouteErrorResponse(error) ? "This page does not exist." : "Somethin went wrong."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
