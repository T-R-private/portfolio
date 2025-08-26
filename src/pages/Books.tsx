import React from "react";
import styled from "styled-components";
import BackButton from "../components/ui/BackButton";
import ExpandableText from "../components/ui/ExpandableText";

const Container = styled.div`
  min-height: calc(100vh - 70px);
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 40px 20px;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(360px, 1fr));
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const BookCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const BookTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const BookTitleLink = styled.a`
  color: #0066cc;
  text-decoration: underline;
  transition: all 0.3s ease;

  &:hover {
    color: #004499;
    text-decoration: none;
  }
`;

const BookDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 16px;
  font-style: normal;
`;

const PersonalRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const RatingLabel = styled.span`
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
`;

const Stars = styled.div`
  color: #ffd700;
  font-size: 2rem;
`;

const RatingText = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
`;

function Books() {
  const booksData = [
    {
      title: "ドラゴンクエストXを支える技術 ── 大規模オンラインRPGの舞台裏",
      url: "https://www.amazon.co.jp/ドラゴンクエストXを支える技術-──-大規模オンラインRPGの舞台裏-WEB-PRESSプラスシリーズ/dp/4297101742",
      description:
        "オンラインゲームの開発技術について学べる本です。大規模システムの設計や運用について、実際のゲーム開発現場での経験を基に書かれています。",
      rating: "★★★★★",
      ratingText: "5.0/5.0",
      comment:
        "個人的にドラクエ10を何千時間とやってきたので、その裏側を知れて感動しました。また、当時のドラクエ10はWii, Wii U, Switch, Windowsなどの多岐に渡るプラットフォームで展開されており、その開発の苦労話なども非常に面白いし、技術的な観点でも良い勉強になりました。",
    },
    {
      title: "コード×AIーソフトウェア開発者のための生成AI実践入門",
      url: "https://www.amazon.co.jp/コード×AIーソフトウェア開発者のための生成AI実践入門-服部-佑樹/dp/4297144840",
      description:
        "生成AIを活用したプログラミングについて学べる本です。生成AIを用いてどのようにプロンプトを作成すれば良いかを、生成AIの仕組みに基づいて最適な使い方を提案してくれます。また、プロンプトについてAIツールの活用方法について、実践的な内容が多く含まれており、開発作業の改善に役立ちました。",
      rating: "★★★★☆",
      ratingText: "4.0/5.0",
      comment:
        "生成AIの仕組みを学ぶには最適な一冊だと感じました。特に、プロンプトが生成AIによってどのように解釈されるのかは、実際に使っていても意外と分からない部分なので、その点が丁寧に解説されていたのは非常に良かったです。",
    },
    {
      title:
        "ネットワークはなぜつながるのか 第2版 知っておきたいTCP/IP、LAN、光ファイバの基礎知識",
      url: "https://www.amazon.co.jp/ネットワークはなぜつながるのか-第2版-知っておきたいTCP-IP、LAN、光ファイバの基礎知識-戸根/dp/4822283119",
      description:
        "ネットワークの仕組みを分かりやすく解説した本です。アプリ→サーバー→ネットワークまでの通信の流れを深掘りしてくれます。",
      rating: "★★★★★",
      ratingText: "5.0/5.0",
      comment:
        "現在進行形で読んでいますが、解像度が非常に高く面白い！特に、アプリケーションの通信がOSI参照モデルに基づいてどのように構成されているかについて、これまで私はぼんやりとした理解しか持っていませんでした。本書では、「アプリ内のこのコードが、OSのどの層を通り、ネットワーク機器でどう処理されるのか」といった具合に、具体的かつ実践的な視点で情報の流れが解説されており、非常に勉強になります。個人的に今年読んだ中で1番おすすめです。",
    },
    {
      title:
        "現場で役立つシステム設計の原則 ~変更を楽で安全にするオブジェクト指向の実践技法",
      url: "https://www.amazon.co.jp/現場で役立つシステム設計の原則-変更を楽で安全にするオブジェクト指向の実践技法-増田-亨/dp/477419087X",
      description:
        "実務で使えるシステム設計の原則について学べる本です。変更を楽にするためにどういったクラス設計にするかをコードと共に丁寧に解説されており、プログラミング初心者でも読みやすい本です。",
      rating: "★★★★★",
      ratingText: "5.0/5.0",
      comment:
        "個人的に、この本の説明は非常に丁寧で重要部分は繰り返しが多く、私のように一度で理解しにくいタイプでも、知識が定着しやすく感じられます。また、業務ロジックの実装にFocusしており、その業務ロジックを設計・実際のコードまで丁寧に落とし込んでくれるので、SIer〜Webエンジニアまで幅広く勉強になる印象を受けました。",
    },
    {
      title:
        "改訂新版　良いコード／悪いコードで学ぶ設計入門 ―保守しやすい　成長し続けるコードの書き方",
      url: "https://www.amazon.co.jp/改訂新版-良いコード%EF%BC%8F悪いコードで学ぶ設計入門-―保守しやすい-成長し続けるコードの書き方-仙塲-大也/dp/4297146223#averageCustomerReviewsAnchor",
      description:
        "コードの設計について、良い例と悪い例を比較しながら学べる本です。実際のプロジェクトで使える設計パターンやアンチパターンについて、RPGの例を用いてとても分かりやすく解説されています。",
      rating: "★★★★☆",
      ratingText: "4.0/5.0",
      comment:
        "アンチパターンだけでなく、良いコードと悪いコードの比較があり分かりやすかったです。RPGの例をもとに解説されているのでゲーム好きな人はイメージしやすいです。",
    },
    {
      title: "AIエージェント革命 「知能」を雇う時代へ",
      url: "https://www.amazon.co.jp/AIエージェント革命-「知能」を雇う時代へ-シグマクシス/dp/4296208160",
      description:
        "生成AIの歴史から現在話題の生成AIエージェント技術について学べる本です。AI技術の最新動向や実務での活用方法について、データを基に幅広くカバーされており、今後の技術トレンドを理解するのに役立ちました。",
      rating: "★★★★☆",
      ratingText: "4.5/5.0",
      comment:
        "生成AIエージェントの理解やビジネスの導入検討されている方、生成AIの未来に興味ある方にはうってつけの本です。生成AIは実際に使った方が早いことが多いのですが、生成AIの歴史からビジネスの活用事例・最新動向に関して網羅されており、実際にサービスに触れながらこの本でインプットしていくことで、理解が一層深まると感じました。",
    },
  ];

  return (
    <Container>
      <Content>
        <Header>
          <Title>技術書紹介</Title>
          <BackButton to="/">← ホームに戻る</BackButton>
        </Header>

        <BooksGrid>
          {booksData.map((book, index) => (
            <BookCard key={index}>
              <BookTitle>
                <BookTitleLink
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {book.title}
                </BookTitleLink>
              </BookTitle>
              <BookDescription>{book.description}</BookDescription>
              <PersonalRating>
                <RatingLabel>個人評価:</RatingLabel>
                <Stars>{book.rating}</Stars>
                <RatingText>{book.ratingText}</RatingText>
              </PersonalRating>
              <ExpandableText text={book.comment}>
                {book.comment}
              </ExpandableText>
            </BookCard>
          ))}
        </BooksGrid>
      </Content>
    </Container>
  );
}

export default Books;
