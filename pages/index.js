import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Textarea,
  Button,
  VStack,
  Center,
  Tab,
  Tabs,
  TabList,
  useToast,
  TabPanels,
  TabPanel,
  Text,
  Heading,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import axios from "axios";
import NYCImage from "../public/nyc.jpg";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const [letter, setLetter] = React.useState("");
  const [translation, setTranslation] = React.useState("");
  const [waiting, setWaiting] = React.useState(false);
  const [tabIndex, setTabIndex] = React.useState(0);
  const toast = useToast();

  function translate() {
    onToggle();
    setWaiting(true);

    axios
      .post("/api", { letter: letter })
      .then((res) => {
        setTranslation(res.data.slice(2));
        setWaiting(false);
      })
      .catch((err) => {
        if (err.response.status === 451) {
          toast({
            title: "La traduccion ha sido bloqueada.",
            status: "error",
            isClosable: true,
          });
        }
        setTranslation("Ha ocurrido un error. Inténtalo de nuevo.");
        setWaiting(false);
      });
  }

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setLetter(inputValue);
  };

  function reset() {
    setLetter("");
    setTranslation("");
    onToggle();
  }

  return (
    <div>
      <Head>
        <title>Ayudamigo</title>
      </Head>
      <Tabs index={tabIndex} onChange={setTabIndex}>
        <TabList>
          <Tab isDisabled>Bienvenidos</Tab>
          <Tab isDisabled>Políticas</Tab>
          <Tab isDisabled>Traductor</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Center>
              <VStack spacing={4} padding={4}>
                <Heading>Comience ahora en tres partes.</Heading>
                <Text fontSize="xl">
                  Ayudamigo es un servicio de traducción de cartas para ayudar a
                  todos que no hablan inglés. Escriba una carta en español y
                  nosotros la traduciremos a inglés con la ayuda de inteligencia
                  artificial. Ayudamigo es mejor que Google Translate porque la
                  inteligencia artificial que usamos, OpenAI, es más
                  inteligente. Puede usar Ayudamigo para traducir cartas de
                  trabajo, cartas de amor, y cartas de solicitud, pero no puede
                  usar Ayudamigo con el discurso de odio.
                </Text>
                <Button
                  colorScheme="blue"
                  onClick={() => setTabIndex(1)}
                  size="lg"
                >
                  Las Políticas
                </Button>
              </VStack>
            </Center>
          </TabPanel>
          <TabPanel>
            <TabPanel>
              <Center>
                <VStack spacing={4} padding={4}>
                  <Heading>Las Políticas</Heading>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Enim praesent elementum facilisis leo. Interdum
                    consectetur libero id faucibus nisl tincidunt. Cursus metus
                    aliquam eleifend mi in nulla. Volutpat lacus laoreet non
                    curabitur gravida arcu. Amet consectetur adipiscing elit
                    pellentesque habitant morbi tristique senectus et. Sed
                    libero enim sed faucibus turpis in eu. Pretium fusce id
                    velit ut tortor. Praesent semper feugiat nibh sed pulvinar
                    proin gravida. Mi quis hendrerit dolor magna eget est lorem
                    ipsum dolor. Pretium fusce id velit ut tortor pretium
                    viverra. Libero enim sed faucibus turpis in eu. Id aliquet
                    risus feugiat in ante metus dictum at tempor. Auctor neque
                    vitae tempus quam pellentesque nec. Aliquet lectus proin
                    nibh nisl condimentum. Risus in hendrerit gravida rutrum
                    quisque non tellus orci. Nibh sed pulvinar proin gravida
                    hendrerit lectus. Amet justo donec enim diam vulputate ut.
                    Et magnis dis parturient montes nascetur ridiculus mus
                    mauris. Congue eu consequat ac felis donec et odio. Quam
                    nulla porttitor massa id neque aliquam vestibulum morbi.
                    Tristique risus nec feugiat in fermentum posuere. Urna
                    cursus eget nunc scelerisque viverra mauris. Faucibus et
                    molestie ac feugiat sed lectus vestibulum mattis
                    ullamcorper. Condimentum lacinia quis vel eros donec ac
                    odio. Mauris in aliquam sem fringilla. Cras pulvinar mattis
                    nunc sed blandit libero volutpat. Integer vitae justo eget
                    magna fermentum iaculis eu non diam. Imperdiet sed euismod
                    nisi porta lorem mollis aliquam ut porttitor. Ultricies mi
                    quis hendrerit dolor magna eget est. Sit amet volutpat
                    consequat mauris nunc. Pellentesque pulvinar pellentesque
                    habitant morbi tristique senectus et netus et. Ipsum
                    faucibus vitae aliquet nec ullamcorper. Eu non diam
                    phasellus vestibulum lorem. Arcu ac tortor dignissim
                    convallis. Gravida in fermentum et sollicitudin ac orci.
                    Enim neque volutpat ac tincidunt vitae semper quis lectus
                    nulla. Tincidunt vitae semper quis lectus nulla at volutpat.
                    Id volutpat lacus laoreet non curabitur. Sollicitudin
                    aliquam ultrices sagittis orci. Urna cursus eget nunc
                    scelerisque viverra mauris in. Egestas erat imperdiet sed
                    euismod nisi porta lorem. Dolor purus non enim praesent
                    elementum facilisis leo vel. Scelerisque eleifend donec
                    pretium vulputate sapien nec sagittis aliquam malesuada.
                    Cras fermentum odio eu feugiat pretium nibh ipsum consequat.
                    Quis blandit turpis cursus in hac habitasse platea. Augue
                    eget arcu dictum varius duis. Enim sed faucibus turpis in.
                    Mattis pellentesque id nibh tortor id aliquet lectus proin
                    nibh. Justo eget magna fermentum iaculis eu non diam
                    phasellus. Nulla facilisi morbi tempus iaculis urna id.
                    Lectus urna duis convallis convallis tellus id interdum
                    velit. Bibendum ut tristique et egestas quis ipsum
                    suspendisse ultrices. Orci nulla pellentesque dignissim enim
                    sit. Bibendum neque egestas congue quisque egestas. Feugiat
                    pretium nibh ipsum consequat nisl vel pretium. Eget gravida
                    cum sociis natoque penatibus et magnis dis parturient.
                    Tincidunt ornare massa eget egestas purus viverra accumsan
                    in. Iaculis at erat pellentesque adipiscing commodo elit.
                    Sed cras ornare arcu dui. Quis enim lobortis scelerisque
                    fermentum. Condimentum lacinia quis vel eros donec ac.
                  </p>
                  <Button
                    colorScheme="blue"
                    onClick={() => setTabIndex(2)}
                    size="lg"
                  >
                    Traductor
                  </Button>
                </VStack>
              </Center>
            </TabPanel>
          </TabPanel>
          <TabPanel>
            <VStack m={3} align="left">
              <Collapse in={!isOpen} animateOpacity>
                <Textarea
                  onChange={handleInputChange}
                  value={letter}
                  h="50vh"
                  size="md"
                  placeholder="Escriba un mensaje como una carta aquí."
                />
              </Collapse>
              <Collapse in={!translation} animateOpacity>
                <Button
                  onClick={translate}
                  colorScheme="blue"
                  isLoading={waiting}
                  loadingText="Traduciendo..."
                >
                  Traducir
                </Button>
              </Collapse>
              <Text hidden={!translation} style={{ whiteSpace: "pre-wrap" }}>
                {translation}
              </Text>
              <Text hidden={!translation}>
                Translated and moderated by GPT-3 for Ayudamigo.
              </Text>
              <Collapse in={translation} animateOpacity>
                <Button onClick={reset} colorScheme="blue">
                  Traducir otra carta
                </Button>
              </Collapse>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
