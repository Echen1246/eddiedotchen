import {
  Heading,
  Stack,
  Flex,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";
import type { NextPageWithLayout } from "next";
import Layout from "../../components/Layout";
import { Build, getAllBuildData } from "../../lib/engineering";
import { NextSeo } from "next-seo";

// Anything not explicitly marked "fun" falls into personal, so a project added
// without a category still shows up somewhere.
const SECTIONS: { label: string; matches: (build: Build) => boolean }[] = [
  { label: "personal projects", matches: (build) => build.category !== "fun" },
  { label: "for fun", matches: (build) => build.category === "fun" },
];

interface EngineeringProps {
  builds: Build[];
}

const BuildList = ({ builds }: { builds: Build[] }) => (
  <>
    {builds.map((build) => {
      const content = (
        <Stack mb={4} width="100%">
          <Divider margin="8px 0 !important" width="100%" />
          <Stack>
            <Heading
              as="h3"
              size="md"
              marginTop="8px !important"
              mb="0px !important"
            >
              {build.title}
            </Heading>
            <Text my={0}>{build.description}</Text>
          </Stack>
        </Stack>
      );

      return (
        <Stack width="100%" key={build.title}>
          {build.url ? (
            <Link href={build.url} isExternal _hover={{ textDecoration: "none" }}>
              {content}
            </Link>
          ) : (
            content
          )}
        </Stack>
      );
    })}
  </>
);

const Engineering: NextPageWithLayout<EngineeringProps> = ({ builds }) => {
  return (
    <>
      <NextSeo title="Projects | Eddie Chen" />
      <Flex direction="column" align="flex-start">
        {SECTIONS.map(({ label, matches }) => {
          const sectionBuilds = builds.filter(matches);
          if (sectionBuilds.length === 0) return null;

          return (
            <Stack width="100%" key={label} mb={6}>
              <Heading
                as="h2"
                fontSize="xs"
                color="gray.500"
                mb="0px !important"
              >
                {label}
              </Heading>
              <BuildList builds={sectionBuilds} />
            </Stack>
          );
        })}
      </Flex>
    </>
  );
};

export default Engineering;

Engineering.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticProps() {
  const builds = getAllBuildData();
  return { props: { builds } };
}
