import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const { width } = Dimensions.get("window");

const flyers = [
  {
    id: "1",
    title: "Weekend Mega Sale",
    store: "Fresh Mart",
    distance: "2.3 km away",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?fit=crop&w=800&q=80",
    category: "Grocery",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Up to 70% Off",
    store: "H&M Fashion",
    distance: "1.5 km away",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?fit=crop&w=800&q=80",
    category: "Fashion",
  },
  {
    id: "3",
    title: "Weekly Grocery",
    store: "Whole Foods",
    distance: "3.1 km away",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?fit=crop&w=800&q=80",
    category: "Grocery",
  },
];

const categories = ["All", "Grocery", "Fashion",];

export default function DealsScreen() {
  const params = useLocalSearchParams<{ category?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(params.category || "All");
  const [search, setSearch] = useState("");

  const filteredFlyers = flyers.filter(f => 
    (selectedCategory === "All" || f.category === selectedCategory) &&
    (f.title.toLowerCase().includes(search.toLowerCase()) || f.store.toLowerCase().includes(search.toLowerCase()))
  );

  const featured = filteredFlyers.find(f => f.isFeatured);
  const trending = filteredFlyers.filter(f => !f.isFeatured);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header & Location */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.headerTitle}>Flyers Friday</Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={14} color="#F59E0B" />
              <Text style={styles.locationText}>Puducherry</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={24} color="#F8FAFC" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#64748B" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search local flyers..."
            placeholderTextColor="#64748B"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Horizontal Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              style={[styles.catChip, selectedCategory === cat && styles.activeCatChip]}
            >
              <Text style={[styles.catText, selectedCategory === cat && styles.activeCatText]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Card */}
        {featured && (
          <TouchableOpacity style={styles.featuredCard}>
            <Image source={{ uri: featured.image }} style={styles.featuredImage} />
            <View style={styles.featuredOverlay}>
              <Text style={styles.featuredTag}>NEW FLYER</Text>
              <Text style={styles.featuredTitle}>{featured.title}</Text>
              <Text style={styles.featuredStore}>{featured.store} • {featured.distance}</Text>
            </View>
          </TouchableOpacity>
        )}

        {/* Trending Section */}
        <Text style={styles.sectionTitle}>Trending Near You</Text>
        <View style={styles.trendingGrid}>
          {trending.map((item) => (
            <TouchableOpacity key={item.id} style={styles.trendingCard}>
              <Image source={{ uri: item.image }} style={styles.trendingImage} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.cardStore}>{item.store}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#0F172A" },
  scrollContent: { padding: 16 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: "900", color: "#F8FAFC" },
  locationContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  locationText: { color: "#94A3B8", fontSize: 12, marginLeft: 4 },
  notificationBtn: { backgroundColor: '#1E293B', padding: 10, borderRadius: 12 },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: "#1E293B",
    borderRadius: 14,
    paddingHorizontal: 15,
    height: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  searchInput: { flex: 1, color: "#F8FAFC", marginLeft: 10, fontSize: 15 },
  catScroll: { marginBottom: 25 },
  catChip: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 25, backgroundColor: "#1E293B", marginRight: 10 },
  activeCatChip: { backgroundColor: "#F59E0B" },
  catText: { color: "#94A3B8", fontWeight: "600" },
  activeCatText: { color: "#0F172A" },
  featuredCard: { width: '100%', height: 200, borderRadius: 24, overflow: 'hidden', marginBottom: 25 },
  featuredImage: { width: '100%', height: '100%' },
  featuredOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: 'rgba(2, 6, 23, 0.6)' },
  featuredTag: { color: '#F59E0B', fontWeight: '800', fontSize: 10, marginBottom: 5 },
  featuredTitle: { color: '#FFF', fontSize: 22, fontWeight: '800' },
  featuredStore: { color: '#CBD5E1', fontSize: 14 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#FFF', marginBottom: 15 },
  trendingGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  trendingCard: { width: (width - 48) / 2, backgroundColor: '#1E293B', borderRadius: 20, marginBottom: 16, overflow: 'hidden' },
  trendingImage: { width: '100%', height: 140 },
  cardInfo: { padding: 12 },
  cardTitle: { color: '#F8FAFC', fontWeight: '700', fontSize: 14 },
  cardStore: { color: '#94A3B8', fontSize: 12, marginTop: 4 }
});