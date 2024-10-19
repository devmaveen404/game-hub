import { Heading, Text, Flex, Image } from "@chakra-ui/react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import logo from '../assets/logo.jpg'

const ErrorPage = () => {
  // invalid route error
  const error = useRouteError();
  return (
    <>
      <Flex justifyContent={'center'} padding={5}>
        <Link to={'/'}>
          <Image src={logo} borderRadius={15} boxSize={'58'} objectFit={'cover'}></Image>
        </Link>
      </Flex>
      <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} minHeight={'70vh'} textAlign={'center'}>
        <Heading fontSize={'8xl'} >404</Heading>
        <Text fontSize={'3xl'} >
          {isRouteErrorResponse(error) ? "This page does not exist." : "Something went wrong."}
        </Text>
      </Flex>
    </>
  );
};

export default ErrorPage;
