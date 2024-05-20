import { Card, Chip, SxProps, Typography } from "@mui/material";
import Flex from "@/components/Layout/Flex";
import PlanButton from "@/components/PlanButton";

interface Props {
  title: string;
  bestseller?: boolean;
  scale?: number;
  sx?: SxProps;
}

export default function OfferCard({
  bestseller,
  title,
  scale = 1.0,
  sx,
}: Props) {
  return (
    <Card
      sx={{
        p: 3,
        textAlign: "center",
        borderRadius: "18px",
        transform: `scale(${scale})`,
        overflow: "visible",
        position: "relative",
        ...sx,
      }}
    >
      {bestseller && (
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
      )}
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {title}
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
        <PlanButton />
      </Flex>
    </Card>
  );
}
