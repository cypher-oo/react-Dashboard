import { Box, Card, Rating } from "@mui/material";
import { FC } from "react";
import FlexBox from "../../FlexBox";
import { Small } from "../../Typography";

const TopSelling: FC = () => {
  return (
    <Card
      sx={{
        padding: "1rem .5rem 1rem 1.5rem",
        height: "577px",
        backgroundColor: "#1E293B",
        color: "#ffffff",
        border: 0,
      }}
    >
      <h3>Top Selling Products</h3>

      <Box
        sx={{
          maxHeight: "477px",
          overflowY: "auto",
          paddingRight: "1rem",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
          },
        }}
      >
        {productList.map((product, index) => (
          <Box key={index} sx={{ mb: "1rem", pr: "1rem" }}>
            <FlexBox mt="1.2rem" flexDirection="column" alignItems="flex-start">
              <FlexBox alignItems="center">
                <img
                  src={product.image}
                  alt={product.title}
                  width="50px"
                  height="50px"
                  style={{ borderRadius: "50%" }}
                />
                <Box ml="1rem">
                  <h4>{product.title}</h4>
                </Box>
              </FlexBox>
              <Box mt="0.5rem">
                <Rating
                  name="read-only"
                  size="small"
                  defaultValue={product.rating}
                  readOnly
                  sx={{
                    color: "yellow",
                    "& .MuiRating-iconEmpty": {
                      color: "#ffffff",
                    },
                  }}
                />
              </Box>
              <Small mt="0.5rem">{product.comment}</Small>
            </FlexBox>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#ffffff",
                marginTop: "1rem",
              }}
            />
          </Box>
        ))}
      </Box>
    </Card>
  );
};

const productList = [
  {
    title: "Priti Roy",
    image: "https://xsgames.co/randomusers/assets/avatars/male/44.jpg",
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus enim quibusdam sapiente eveniet tenetur?",
  },
  {
    title: "Shayan Biswas",
    image: "https://xsgames.co/randomusers/assets/avatars/male/51.jpg",
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam sapiente eveniet tenetur?",
  },
  {
    title: "Virat Kholi",
    image: "https://xsgames.co/randomusers/assets/avatars/male/32.jpg",
    rating: 3,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    title: "Sumon Royal",
    image: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. quibusdam sapiente eveniet tenetur?",
  },
  {
    title: "Shayam Sharma",
    image: "https://xsgames.co/randomusers/assets/avatars/male/43.jpg",
    rating: 3,
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

export default TopSelling;
