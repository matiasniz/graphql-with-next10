import Link from "next/link";
import { Container, Grid, Image, Input } from "semantic-ui-react";

export default function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Logo />
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <Search />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.png" alt="Vallejos" />
      </a>
    </Link>
  );
}

function Search() {
  return <Input id="search-game" icon={{ name: "search" }} />;
}
