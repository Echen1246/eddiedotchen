import { Box, Flex, Heading, Link, Button, Icon } from "@chakra-ui/react";
import type { NextPageWithLayout } from "next";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import { FiDownload } from "react-icons/fi";

const Resume: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="Resume | Eddie Chen" />
      <Flex direction="column" gap={4}>
        <Flex justify="space-between" align="center">
          <Heading size="lg">Resume</Heading>
          <Link href="/Edward Chen's Resume.pdf" download isExternal>
            <Button leftIcon={<Icon as={FiDownload} />} colorScheme="blue" size="sm">
              Download PDF
            </Button>
          </Link>
        </Flex>
        <Box
          as="iframe"
          src="/Edward Chen's Resume.pdf"
          width="100%"
          height="800px"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="md"
        />
      </Flex>
    </>
  );
};

export default Resume;

Resume.getLayout = (page) => <Layout>{page}</Layout>;

