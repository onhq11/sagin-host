import Flex from "@/components/Layout/Flex";
import Image from "next/image";
import icon from "../assets/icon.png";
import icon2 from "../assets/website.svg";
import greenBackground from "../assets/green-background.png";
import { Box, Button, Card, Chip, Typography } from "@mui/material";

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
            variant="contained"
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
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: "18px",
              overflow: "visible",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Student +
            </Typography>
            <Typography sx={{ mb: 1 }}>
              2137zł / rok
              <br />
              150 GB prestrzeni dyskowej
              <br />
              do 450% CPU
              <br />
              do 8GB RAM
              <br />
              Kopie zapasowe co godzine
              <br />
              Dostepnosc kopii zapasowych do 90 dni
              <br />
              Konta FTP: bez limitu
              <br />
              Baza danych MARIADB
              <br />
              Skrzynki EMAIL bez limitu
              <br />
              PHP 5.6 do 8.3
              <br />
              SSL lets encrypt!
              <br />
              CRON: TAK
              <br />
              Limit 10 000 wiadomosci email na dzien
              <br />
              Nieograniczona przestrzen dyskowa
              <br />
              Bezpieczne kopie zapasowe
              <br />
              24/7 Wsparcie techniczne
              <br />
              99.9% uptime
            </Typography>
            <Flex center sx={{ gap: 2, mb: -10 }}>
              <Button variant="contained" sx={{ borderRadius: "15px" }}>
                Wybierz plan
              </Button>
            </Flex>
          </Card>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: "18px",
              transform: "scale(1.2)",
              overflow: "visible",
              position: "relative",
            }}
          >
            <Chip
              sx={{
                position: "absolute",
                top: "10px",
                left: "-15%",
                transform: "rotate(-45deg)",
                fontSize: 16,
                p: 2,
                background:
                  "linear-gradient(90deg, rgba(231,70,141,1) 0%, rgba(0,108,236,1) 100%)",
                color: "#eee",
              }}
              label="BESTSELLER"
            />
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Pracownicy 365
            </Typography>
            <Typography sx={{ mb: 1 }}>
              2137zł / rok
              <br />
              150 GB prestrzeni dyskowej
              <br />
              do 450% CPU
              <br />
              do 8GB RAM
              <br />
              Kopie zapasowe co godzine
              <br />
              Dostepnosc kopii zapasowych do 90 dni
              <br />
              Konta FTP: bez limitu
              <br />
              Baza danych MARIADB
              <br />
              Skrzynki EMAIL bez limitu
              <br />
              PHP 5.6 do 8.3
              <br />
              SSL lets encrypt!
              <br />
              CRON: TAK
              <br />
              Limit 10 000 wiadomosci email na dzien
              <br />
              Nieograniczona przestrzen dyskowa
              <br />
              Bezpieczne kopie zapasowe
              <br />
              24/7 Wsparcie techniczne
              <br />
              99.9% uptime
            </Typography>
            <Flex center sx={{ gap: 2, mb: -10 }}>
              <Button variant="contained" sx={{ borderRadius: "15px" }}>
                Wybierz plan
              </Button>
            </Flex>
          </Card>
          <Card
            sx={{
              p: 3,
              textAlign: "center",
              borderRadius: "18px",
              overflow: "visible",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Titan Sigma
            </Typography>
            <Typography sx={{ mb: 1 }}>
              2137zł / rok
              <br />
              150 GB prestrzeni dyskowej
              <br />
              do 450% CPU
              <br />
              do 8GB RAM
              <br />
              Kopie zapasowe co godzine
              <br />
              Dostepnosc kopii zapasowych do 90 dni
              <br />
              Konta FTP: bez limitu
              <br />
              Baza danych MARIADB
              <br />
              Skrzynki EMAIL bez limitu
              <br />
              PHP 5.6 do 8.3
              <br />
              SSL lets encrypt!
              <br />
              CRON: TAK
              <br />
              Limit 10 000 wiadomosci email na dzien
              <br />
              Nieograniczona przestrzen dyskowa
              <br />
              Bezpieczne kopie zapasowe
              <br />
              24/7 Wsparcie techniczne
              <br />
              99.9% uptime
            </Typography>
            <Flex center sx={{ gap: 2, mb: -5 }}>
              <Button variant="contained" sx={{ borderRadius: "15px" }}>
                Wybierz plan
              </Button>
            </Flex>
          </Card>
        </Flex>
      </main>
    </Flex>
  );
}
