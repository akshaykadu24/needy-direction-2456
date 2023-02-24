
import React from 'react'
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Text,
    useDisclosure,
    Grid,
    GridItem,
    Image,
    HStack,
    Tag,
    Button,
    Center,
    Wrap,
    Heading,
  } from "@chakra-ui/react";
  import { StarIcon } from "@chakra-ui/icons";

const Products_box = ({e}) => {
    let exist = false;
  return (
    <>
    <Box key={e.id} display={{ lg: "flex", base: "block" }}
                w="100%"
                m="auto"
                mt="40px"
                boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
                h="auto"
               
                >
                  
                  <Box flex={{ xl: "0.5", lg: "0.6" }}
                        // p={{
                        //   xl: "15px",
                        //   lg: "15px 10px",
                        //   md: "15px",
                        //   base: "15px",
                        // }}
                        borderRadius="20px">
                    <Image src={e.images}  m="auto" width="200px" height="200px" alt="image" />
                  </Box>
                  
                  <Box  w={{base:"100%",md:"90%",lg:"40%"}}  h={"auto"} p={{xl: "15px",lg: "15px 10px",md: "15px",base: "15px"}}>

                  <Heading 
                  size={{md:"md",base:"xs",lg:"sm"}} 
                  textAlign={"center"} 
                  color="black"
                   _hover={{ textDecoration: "underLine" }} 
                   cursor="pointer" 
                   w={{lg:"170px",xl:"270px"}}
                  // ml={{base:"20px",md:"0px",lg:"10px",xl:"10px"}}
                   alignItems="center">
                    {e.title}
                  </Heading>
                  <HStack 
                  display="flex"
                   h="30px" 
                   
                   flexWrap="wrap" 
                   textAlign="center" 
                   justifyContent="center"
                  w={{sm:"200px",md:"190px",xl:"270px"}} 
                   size={{md:"md",base:"xs",lg:"sm"}} >

                          <b fontSize="13px">Rs. {e.price}</b>

                          <Text fontSize="13px" color="#D6D0DB" textDecoration="line-through">
                             {e.strike_price}
                          </Text>
                          

                          <Tag size="xs" fontSize="12px" colorScheme="gray">
                            {e.discount}
                          </Tag>
                        </HStack>
                        
                        <Button display="flex" 
                   h="30px" 
                   
                   flexWrap="wrap" 
                   textAlign="left" 
                   justifyContent="center"
                   //alignItems="left"
                 //w={{sm:"200px",md:"190px",xl:"270px"}} 
                  w={{sm:"150px",md:"150px",lg:"150px",xl:"250px"}}
                  ml={{base:"100px",sm:"10px",md:"10px",xl:"10px"}}
                 
                   size={{md:"md",base:"xs",lg:"sm"}}
                   style={{border:"1px solid gray",borderRadius:"15px"}}

                   marginRight={{base:"1px",md:"2px",lg:"2px",xl:"2px"}}
                            mt={{base:"15px",md:"15px",lg:"10px",xl:"10px"}}
                            pt={{base:"1px",md:"1px",lg:"1px",xl:"1px"}}
                            pb={{base:"1px",md:"1px",lg:"1px",xl:"1px"}}
                           // pr={{base:"10px",md:"10px",lg:"10px",xl:"20px"}}
                   >
                    <Box display="flex"  alignItems="center"  >
                  {Array(1)
                    .fill("")
                    .map((e, i) => (
                      <StarIcon
                        boxSize={3}
                        key={i}
                        // color={
                        //   i < Math.floor(e.rating) ? "yellow" : "gray"
                        // }
                        color="skyblue"
                      />
                    ))}
                  <Box as="span"  ml="2" color="dark blue" fontSize="sm">
                    ({e.rating})           |
                  </Box>
                  <Box as="span"  ml="2" color="dark blue" fontSize="sm">
                    {/* ({"45"}) */}
                    45 reviews
                  </Box>

                </Box>



                        </Button>

                        <Text  
                        size={{md:"md",base:"xs",lg:"sm"}} 
                  textAlign={"center"} 
                  color="black"
                  
                   cursor="pointer" 
                   w={{lg:"170px",xl:"270px"}}
                  // ml={{base:"20px",md:"0px",lg:"10px",xl:"10px"}}
                   alignItems="center"
                   justifyContent="center"
                        >
                          15% Extra Discount on UPI
                          </Text>

                        

                        {exist ? (
                          <Button
                            mr={{ md: "20px", base: "5px" }}
                            //size={{ xl: "lg", lg: "md", md: "md", base: "xs" }}
                            bgColor="#ff0000"
                            color="white"
                            borderRadius="3px"
                            _hover={{
                              bgColor: "white",
                              color: "#333333",
                              border: "2px solid #333333",
                            }}
                           // onClick={goToCart}
                          >
                            GO TO CART
                          </Button>
                        ) : (
                          <Button
                            _hover={{
                              backgroundColor: "white",
                              color: "#ff0000",
                              outlineColor: "#ff0000",
                            }}
                            
                            margin="auto"
                           // mr={{ md: "20px", base: "5px" }}
                            marginRight={{base:"3px",md:"2px",lg:"2px",xl:"2px"}}
                            mt={{base:"15px",md:"15px",lg:"10px",xl:"10px"}}
                            pt={{base:"1px",md:"1px",lg:"1px",xl:"1px"}}
                            pb={{base:"1px",md:"1px",lg:"1px",xl:"1px"}}
                           // size={{ xl: "lg", lg: "md", md: "md", base: "xs" }}
                            bgColor="#ff0000"
                            color="white"
                            borderRadius="3px"
                            //style={{ padding: "2px 4px" }}
                            //width="250px"
                            //onClick={handleClick}
                            w={{base:"190px",md:"180px",lg:"180px",xl:"280px"}}
                            px={2}
                            alignItems="center" >
                            Add To Cart
                          </Button>
                        )}
                  </Box>
                </Box>
    </>
  )
}

export default Products_box