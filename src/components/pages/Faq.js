import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>

      <h3>Who are you and why are you doing this?</h3>

      <p>We are Adrian and David, nice to meet you!</p>
      <p>
        David and his wife went through infertility, and with that came all
        sorts of adventures. One day, David’s mother-in-law told them that she
        had a conception dream! She said it was a Korean belief that if they
        bought the dream, they would get the good luck associated with it. So
        they paid her $10 and she told them about her dream.
      </p>
      <p>
        Lo and behold, David and his wife are now expecting, and they couldn’t
        be happier! So we decided to make a way for others to get similar
        happiness. Instead of paying each other, since we’re all strangers, we
        decided to have the money go towards a dream-related charity (
        <a href="https://wish.org" target="_blank" rel="noopener noreferrer">
          Make-A-Wish
        </a>
        ).
      </p>

      <h3>How does SendDreams work?</h3>

      <p>You can do two things on SendDreams:</p>

      <ol>
        <li>Donate a dream that you had; or,</li>
        <li>Buy a dream that you see (for yourself or for someone else).</li>
      </ol>

      <p>
        To donate a dream that you had, simply go <Link to="/donate">here</Link>{' '}
        and click on “Submit Dream” beside the symbol or good omen that was in
        your dream (you can also select “Other”). Then simply type up a
        description of your dream and submit it. Your positive dream might help
        someone else’s dream come true!
      </p>

      <p>
        To send a dream, simply go <Link to="/send">here</Link> and you will be
        presented with a random dream that has been submitted. If you like the
        preview you see, click “Send This Dream” and let us know who we should
        send it to (it could be yourself) and your payment information. Then
        click “Confirm” and a receipt will be emailed to you, and the unredacted
        dream’s description will be sent to the recipient you named. Afterwards,
        we will make the donation to Make-A-Wish.
      </p>

      <p>
        If you’d like to view another dream, click “View Another Dream”, and
        another random dream will be presented to you. So, if you like a dream,
        make sure to take action! If you click “View Another Dream”, you may
        never see the same dream again.
      </p>

      <h3>Will I get bad luck by giving away my dream?</h3>

      <p>
        Not at all. We only allow posting dreams associated with positive
        symbols. We believe in good karma, so by doing something good - donating
        your dream - you are helping others!
      </p>

      <h3>Who made up the symbols?</h3>

      <p>
        There’s no one definitive source for good symbols and omens, so we had
        to piece it together from various articles and research papers. Most of
        the research center around Korean beliefs, since this practice of buying
        dreams is most prevalent in Korea.
      </p>

      <h3>What if I don&apos;t like the content of the dream I bought?</h3>

      <p>
        We show a preview of the dream’s description, with certain words
        redacted. We cannot show the entire dream because that would lose the
        intended positive effect for the recipient of the dream. With the
        preview and the associated symbol, you can get a sense of what the dream
        is about before purchasing.
      </p>

      <h3>Will I get a tax receipt?</h3>

      <p>
        No. In order to ensure that the donation happens, we make the donation
        on behalf of the buyer. Since we are making the donation, the tax
        receipt will be made out to us. You will, however, receive a receipt for
        your purchase on SendDreams.
      </p>

      <h3>What&apos;s the refund policy?</h3>

      <p>Unfortunately we do not refund purchases.</p>

      <h3>Is payment secure?</h3>

      <p>
        Yes, we use{' '}
        <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
          Stripe
        </a>
        , a trusted third-party payments provider, to handle all payment
        transactions.
      </p>

      <h3>How do I know my money will actually go to Make-A-Wish?</h3>

      <p>
        After we make the donation to Make-A-Wish, we will send you the official
        donation receipt. The donation will come with a printable certificate
        that will have your name on it, saying an amount was donated by us on
        your behalf.
      </p>
    </div>
  );
};
