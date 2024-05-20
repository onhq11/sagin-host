import Flex from "@/components/Layout/Flex";
import Image from "next/image";
import icon from "../assets/icon.png";
import icon2 from "../assets/website.svg";
import { Button, Typography } from "@mui/material";
import OfferCard from "@/components/OfferCard";
import Link from "next/link";

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
          <Link href={"/"}>
            <Typography
              sx={{
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { opacity: 0.4 },
              }}
            >
              Główna
            </Typography>
          </Link>
          <Link href={"/oferty"}>
            <Typography
              sx={{
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { opacity: 0.4 },
              }}
            >
              Oferty
            </Typography>
          </Link>
          <Link href={"/blog"}>
            <Typography
              sx={{
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { opacity: 0.4 },
              }}
            >
              Blog
            </Typography>
          </Link>
          <Link href={"/about"}>
            <Typography
              sx={{
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { opacity: 0.4 },
              }}
            >
              O nas
            </Typography>
          </Link>
        </Flex>
        <Flex>
          <Link href={"/login"}>
            <Button
              sx={{ m: 2, borderRadius: "15px", px: 2, py: 1, fontSize: 14 }}
              color="secondary"
              variant="contained"
            >
              Zaloguj się
            </Button>
          </Link>
          <Link href={"/register"}>
            <Button
              sx={{ m: 2, borderRadius: "15px", px: 2, py: 1, fontSize: 14 }}
              variant="contained"
            >
              Dołącz do nas
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex between sx={{ mt: 9, mx: 20 }}>
        <Flex
          column
          sx={{ color: "#4655ee", gap: 2, mt: 4, position: "relative" }}
        >
          <Flex column sx={{ gap: 0.5 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "bold",
                fontSize: 110,
                background:
                  "linear-gradient(to bottom, transparent 40%, #edf4fe 40%)",
              }}
            >
              NAJTAŃSZY
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
            <Link href={"/oferty"}>
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
            </Link>
            <Link href={"/contact"}>
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
            </Link>
          </Flex>
          <Typography sx={{ color: "gray", mt: 6 }}>
            Sagin Host Tech Solutions, przez pasjonatów dla pasjonatów
          </Typography>
        </Flex>
        <Image style={{ marginTop: "60px" }} src={icon2} alt={"website"} />
      </Flex>
      <section>
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </section>
      <main
        style={{
          backgroundColor: "#4655ee",
          width: "100vw",
          padding: "100px 0",
        }}
      >
        <Flex between sx={{ mx: 30, gap: 2 }}>
          <OfferCard title={"Student Pack"} />
          <OfferCard
            bestseller
            title={"Pracownicy 365"}
            scale={1.2}
            sx={{ mb: 4, pb: 8 }}
          />
          <OfferCard title={"Titan Sigma"} />
        </Flex>
      </main>
    </Flex>
  );
}
