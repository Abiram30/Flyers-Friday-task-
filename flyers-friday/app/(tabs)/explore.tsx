import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function DetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#F8FAFC" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Flyer Details</Text>
        <TouchableOpacity style={styles.backBtn}>
          <Ionicons name="share-social-outline" size={24} color="#F8FAFC" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Store Info Header */}
        <View style={styles.storeHeader}>
          <View style={styles.storeLogoContainer}>
            <Image 
              source={{ uri: "https://images.unsplash.com/photo-1542838132-92c53300491e" }} 
              style={styles.storeLogo} 
            />
          </View>
          <View style={styles.storeTextInfo}>
            <Text style={styles.storeName}>Fresh Mart Supermarket</Text>
            <Text style={styles.storeStatus}>2.3 km away • Open until 9 PM</Text>
          </View>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Main Flyer Image - CHAIR IMAGE REMOVED */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" }}
            style={styles.mainImage}
            resizeMode="cover" 
          />
          <View style={styles.pageIndicator}>
            <Text style={styles.indicatorText}>1 / 3</Text>
          </View>
        </View>

        {/* Deal Content */}
        <View style={styles.contentSection}>
          <View style={styles.interactionRow}>
            <View style={styles.viewCount}>
              <Ionicons name="eye-outline" size={16} color="#64748B" />
              <Text style={styles.statText}>1,250 Views</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={24} color="#F8FAFC" />
            </TouchableOpacity>
          </View>

          <Text style={styles.dealTitle}>Weekly Grocery Blowout Deals</Text>
          <Text style={styles.dealDescription}>
            Save big this week on fresh organic produce, premium meats, and pantry essentials. 
            Our flyer features over 200 items on discount with up to 40% OFF. Don't miss out on 
            our special Weekend Flash Sale!
          </Text>

          <View style={styles.validityBox}>
            <Ionicons name="calendar-outline" size={18} color="#F59E0B" />
            <Text style={styles.validityText}>Valid: Nov 15 - Nov 22, 2025</Text>
          </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.primaryBtn}>
          <Ionicons name="map-outline" size={20} color="#0F172A" />
          <Text style={styles.primaryBtnText}>Get Directions</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
  },
  headerTitle: { color: "#F8FAFC", fontSize: 18, fontWeight: "800" },
  backBtn: { padding: 8 },
  storeHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1E293B",
    marginVertical: 10,
  },
  storeLogoContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#FFF",
    overflow: "hidden",
  },
  storeLogo: { width: "100%", height: "100%" },
  storeTextInfo: { flex: 1, marginLeft: 15 },
  storeName: { color: "#F8FAFC", fontSize: 16, fontWeight: "700" },
  storeStatus: { color: "#94A3B8", fontSize: 12, marginTop: 2 },
  followBtn: {
    backgroundColor: "#F59E0B",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  followText: { color: "#0F172A", fontWeight: "700", fontSize: 13 },
  imageContainer: {
    width: width,
    height: 350, // Adjusted height for better layout
    backgroundColor: "#1E293B",
    position: "relative",
  },
  mainImage: { width: "100%", height: "100%" },
  pageIndicator: {
    position: "absolute",
    bottom: 20, // Moved to bottom for cleaner look
    right: 20,
    backgroundColor: "rgba(15, 23, 42, 0.7)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  indicatorText: { color: "#FFF", fontSize: 12, fontWeight: "700" },
  contentSection: { padding: 20 },
  interactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  viewCount: { flexDirection: "row", alignItems: "center" },
  statText: { color: "#64748B", fontSize: 14, marginLeft: 6 },
  dealTitle: { color: "#F8FAFC", fontSize: 22, fontWeight: "800", marginBottom: 10 },
  dealDescription: { color: "#94A3B8", fontSize: 15, lineHeight: 22, marginBottom: 20 },
  validityBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(245, 158, 11, 0.1)",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(245, 158, 11, 0.3)",
  },
  validityText: { color: "#F59E0B", marginLeft: 10, fontWeight: "600", fontSize: 14 },
  primaryBtn: {
    flexDirection: "row",
    backgroundColor: "#F59E0B",
    margin: 20,
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryBtnText: { color: "#0F172A", fontSize: 16, fontWeight: "800", marginLeft: 10 },
});