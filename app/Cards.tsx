import {
  Heading,
  Text,
  Stack,
  Image,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Button,
  Flex,
  HStack,
  Link,
} from "@chakra-ui/react";

export default function Cards() {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      backgroundImage="url('/header_bg.jpg')"
      backgroundRepeat="repeat-y"
      backgroundSize="cover"
    >
      <HStack spacing="20" my="10" alignItems="stretch">
        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="https://images.theconversation.com/files/414962/original/file-20210806-17-jibbct.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              alt="Web 3 & metaverse"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Web 3.0 (Blockchain) and Metaverse</Heading>
              <Text>
                This specialization focuses on developing full-stack Web 3.0 and
                Metaverse experiences for the next generation of the internet by
                specializing in building worlds that merge the best of
                cutting-edge decentralized distributed blockchains with 3D
                metaverse client experiences.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/web3">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="https://emarsys.com/app/uploads/2020/03/real-ai.jpg"
              alt="AI & deep learning"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                Artificial Intelligence (AI) and Deep Learning
              </Heading>
              <Text>
                The AI and Deep Learning specialization focuses on building and
                deploying intelligent APIs using OpenAI models and building
                custom Deep Learning Tensorflow models.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/ai">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="https://images.techhive.com/images/article/2015/06/cloud-development-ts-100588283-large.jpg?auto=webp&quality=85,70"
              alt="Cloud-Native Computing"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Cloud-Native Computing</Heading>
              <Text>
                The Cloud-Native Computing Specialization focuses on Containers,
                Kubernetes, and CDK for Kubernetes.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/cloud_native">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </HStack>

      <HStack spacing="20" mb="10" alignItems="stretch">
        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="https://www.lifely.cc/wp-content/uploads/2022/07/IoT.jpeg"
              alt="Ambient Computing and IoT"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Ambient Computing and IoT</Heading>
              <Text>
                The Ambient Computing and IoT Specialization focuses on building
                Smart Homes, Offices, Factories, and Cities using Voice
                computing, Matter Protocol, and Embedded Devices.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/iot">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="https://www.unr.edu/main/images/divisions/research-innovation/ncb/dna.jpg"
              alt="Genomics and Bioinformatics"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Genomics and Bioinformatics</Heading>
              <Text>
                Genomics is the study of the total genetic makeup of individual
                organisms, bioinformatics encompasses a diverse range of
                analytical methods and tools applied to genomic data. This
                Specialization focuses on performing complex bioinformatics
                analysis using the most essential Python libraries and
                applications.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/genomics">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card maxW="sm">
          <CardBody>
            <Image
              height="350px"
              width="350px"
              src="https://industrywired.com/wp-content/uploads/2019/08/How_to-Embrace-Automation-for-Business-Success.jpg"
              alt="Network Programmability and Automation"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">
                Network Programmability and Automation
              </Heading>
              <Text>
                Network automation is crucial due to new protocols,
                technologies, delivery models, and the requirement of
                enterprises. This course teaches network engineers how to
                automate systems with code using a variety of technologies and
                tools, including Linux, Python, APIs, and Git.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/automation">
              <Button variant="solid" colorScheme="blue">
                More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </HStack>
    </Flex>
  );
}
