import Flex from "@/components/Layout/Flex";
import Image from "next/image";
import icon from "../assets/icon.png";
import icon2 from "../assets/website.svg";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Flex column>
      <Flex between alignCenter sx={{ m: 2 }}>
        <Image
          height="60"
          style={{ marginLeft: "10px" }}
          src={icon}
          alt="Sagin host"
        />
        <Flex sx={{ gap: 10 }}>
          <Typography
            sx={{
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": { opacity: 0.4 },
            }}
          >
            O nas
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": { opacity: 0.4 },
            }}
          >
            O nas
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": { opacity: 0.4 },
            }}
          >
            O nas
          </Typography>
          <Typography
            sx={{
              cursor: "pointer",
              transition: "0.2s",
              "&:hover": { opacity: 0.4 },
            }}
          >
            O nas
          </Typography>
        </Flex>
        <Flex>
          <Button
            sx={{ m: 2, borderRadius: "15px", px: 2, py: 1, fontSize: 14 }}
            color="secondary"
          >
            Zaloguj się
          </Button>
          <Button
            sx={{ m: 2, borderRadius: "15px", px: 2, py: 1, fontSize: 14 }}
            variant="contained"
          >
            Dołącz do nas
          </Button>
        </Flex>
      </Flex>
      <Flex between sx={{ my: 9, mx: 20 }}>
        <Flex
          column
          sx={{ color: "#4655ee", gap: 2, mt: 4, position: "relative" }}
        >
          <Flex column sx={{ gap: 1 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: 110,
                background:
                  "linear-gradient(to bottom, transparent 40%, #edf4fe 40%)",
              }}
            >
              NAJLEPSZY
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: 80,
                background:
                  "linear-gradient(to bottom, transparent 40%, #edf4fe 40%)",
              }}
            >
              HOSTING
            </Typography>
          </Flex>
          <Flex sx={{ gap: 2, mt: 10 }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "15px",
                fontSize: 16,
                px: 2,
                py: 1,
                boxShadow: "6px 9px 4px 1px rgba(237, 244, 254, 1)",
              }}
            >
              Sprawdź teraz
            </Button>
            <Button
              color="secondary"
              sx={{
                borderRadius: "15px",
                fontSize: 16,
                px: 2,
                py: 1,
                boxShadow: "6px 9px 4px 1px rgba(237, 244, 254, 1)",
              }}
            >
              Skontaktuj się
            </Button>
          </Flex>
        </Flex>
        <Image style={{ marginTop: "60px" }} src={icon2} alt={"website"} />
      </Flex>
    </Flex>
  );
}
