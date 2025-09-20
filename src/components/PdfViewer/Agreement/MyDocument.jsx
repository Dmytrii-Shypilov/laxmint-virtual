import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 30, fontSize: 12, lineHeight: 1.5 },
  section: { marginBottom: 12 },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  text: { fontSize: 12, marginBottom: 6 },
  signatureBlock: { marginTop: 30 },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Title */}
      <View style={styles.section}>
        <Text style={styles.heading}>GOLD MINE LAND SALE AGREEMENT</Text>
      </View>

      {/* Intro */}
      <View style={styles.section}>
        <Text style={styles.text}>
          This Gold Mine Land Sale Agreement is made and entered into on this
          ___ day of ______, 20 (the “Effective Date”) by and between:
        </Text>
      </View>

      {/* Seller */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Seller:</Text>
        <Text style={styles.text}>
          [Your Company Name], a company incorporated under the laws of
          [Jurisdiction], having its principal place of business at [Address]
          (hereinafter referred to as the “Seller”).
        </Text>
      </View>

      {/* Buyer */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Buyer:</Text>
        <Text style={styles.text}>
          [Buyer Name], residing at [Address] (hereinafter referred to as the
          “Buyer”).
        </Text>
      </View>

      {/* Whereas */}
      <View style={styles.section}>
        <Text style={styles.text}>
          WHEREAS: The Seller operates an online platform that allows users to
          purchase virtual representations of land plots, specifically gold
          deposit land plots in Madagascar, for entertainment, interactive, and
          virtual purposes (the “Gold Mine Land”);
        </Text>
        <Text style={styles.text}>
          The Buyer wishes to purchase certain Gold Mine Land from the Seller
          through the Seller’s platform.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
          NOW, THEREFORE, in consideration of the mutual promises, covenants,
          and representations contained herein, the parties agree as follows:
        </Text>
      </View>

      {/* Sections */}
      <View style={styles.section}>
        <Text style={styles.subheading}>1. Description of Gold Mine Land</Text>
        <Text style={styles.text}>Plot ID/Number: [Insert Plot ID]</Text>
        <Text style={styles.text}>
          Virtual Location: Gold Deposit Region, Madagascar
        </Text>
        <Text style={styles.text}>
          Virtual Plot Size: [Insert Dimensions, e.g., 50m x 50m]
        </Text>
        <Text style={styles.text}>
          Any additional virtual features: [Optional]
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>2. Sale and Transfer</Text>
        <Text style={styles.text}>
          The Seller agrees to sell, and the Buyer agrees to purchase, the Gold
          Mine Land described above.
        </Text>
        <Text style={styles.text}>
          Upon payment of the purchase price (as specified in Section 3), the
          Seller shall transfer to the Buyer a virtual ownership certificate for
          the corresponding Gold Mine Land on the Seller’s platform.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>3. Purchase Price</Text>
        <Text style={styles.text}>
          The total purchase price for the Gold Mine Land is [Insert Amount]
          [Currency].
        </Text>
        <Text style={styles.text}>
          The Buyer shall pay the purchase price through the payment methods
          provided on the Seller’s platform.
        </Text>
        <Text style={styles.text}>All payments are non-refundable.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>4. Representations and Warranties</Text>
        <Text style={styles.text}>
          Seller’s Warranty: The Seller warrants that it has the right to sell
          the Gold Mine Land and to grant the Buyer access and usage rights on
          its platform.
        </Text>
        <Text style={styles.text}>
          Buyer’s Acknowledgment: The Buyer acknowledges that the Gold Mine Land
          is purely virtual, does not confer any real-world ownership, mining
          rights, or legal claim over physical land in Madagascar, and is for
          interactive/entertainment purposes only.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>5. Limitations of Liability</Text>
        <Text style={styles.text}>
          The Seller shall not be liable for any losses, damages, or claims
          arising from the Buyer’s use of the Gold Mine Land.
        </Text>
        <Text style={styles.text}>
          The Gold Mine Land is provided “as-is” and the Seller makes no
          warranties, express or implied, regarding its virtual value,
          usability, or any other aspect.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>6. Entire Agreement</Text>
        <Text style={styles.text}>
          This Deed constitutes the entire agreement between the parties with
          respect to the Gold Mine Land and supersedes all prior agreements,
          understandings, or representations, whether written or oral.
        </Text>
      </View>

      {/* Signatures */}
      <View style={styles.signatureBlock}>
        <Text>
          IN WITNESS WHEREOF, the parties hereto have executed this Gold Mine
          Land Sale Deed as of the Effective Date.
        </Text>
      </View>

      <View style={styles.signatureBlock}>
        <Text>Seller:</Text>
        <Text>[Name & Designation]</Text>
        <Text>[Your Company Name]</Text>
      </View>

      <View style={styles.signatureBlock}>
        <Text>Buyer:</Text>
        <Text>[Buyer Name]</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
