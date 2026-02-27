import { Box, VStack, Text, Link } from "@chakra-ui/react";
import React from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function TableOfContents() {
  const [headings, setHeadings] = React.useState<TocItem[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const proseEl = document.querySelector(".chakra-prose");
    if (!proseEl) return;

    const elements = proseEl.querySelectorAll("h2, h3");
    const items: TocItem[] = [];

    elements.forEach((el) => {
      const text = el.textContent || "";
      const id = slugify(text);
      el.id = id;
      items.push({
        id,
        text,
        level: el.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);
  }, []);

  React.useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <Box
      position="absolute"
      left="100%"
      ml="60px"
      display={{ base: "none", xl: "block" }}
      width="200px"
    >
      <VStack
        position="fixed"
        align="flex-start"
        spacing={1}
        maxH="80vh"
        overflowY="auto"
        pr={2}
        css={{
          "&::-webkit-scrollbar": { width: "2px" },
          "&::-webkit-scrollbar-thumb": { background: "#ccc" },
        }}
      >
        <Text fontWeight="bold" fontSize="smaller" mb={1}>
          ON THIS PAGE
        </Text>
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            pl={heading.level === 3 ? 3 : 0}
            fontSize="sm"
            lineHeight="tall"
            color={activeId === heading.id ? "black" : "gray.500"}
            fontWeight={activeId === heading.id ? "semibold" : "normal"}
            _hover={{ color: "black", textDecoration: "none" }}
            transition="color 0.15s"
          >
            {heading.text}
          </Link>
        ))}
      </VStack>
    </Box>
  );
}
