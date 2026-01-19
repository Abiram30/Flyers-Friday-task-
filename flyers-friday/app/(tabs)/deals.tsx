import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

const { width } = Dimensions.get("window");

const flyers = [
  { id: "1", title: "Fresh Produce 40% Off", store: "Fresh Mart", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?fit=crop&w=800&q=80", category: "Grocery" },
  { id: "2", title: "Summer Lookbook", store: "Style Hub", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?fit=crop&w=800&q=80", category: "Fashion" },
  { id: "3", title: "Organic Weekly", store: "Whole Foods", image: "https://images.unsplash.com/photo-1503602642458-232111445657?fit=crop&w=800&q=80", category: "Grocery" },
  { id: "4", title: "New Tech Arrival", store: "Best Buy", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?fit=crop&w=800&q=80", category: "Electronics" },
];

const trendingStores = [
  { id: 's1', name: 'Walmart', logo: 'https://logo.clearbit.com/walmart.com' },
  { id: 's2', name: 'Target', logo: 'https://logo.clearbit.com/target.com' },
  { id: 's3', name: 'Zara', logo: 'https://logo.clearbit.com/zara.com' },
  { id: 's4', name: 'Costco', logo: 'https://logo.clearbit.com/costco.com' },
];

export default function DealsScreen() {
  const router = useRouter();
  const { category: paramCat } = useLocalSearchParams<{ category: string }>();
  const [selectedCategory, setSelectedCategory] = useState(paramCat || "All");

  const filtered = flyers.filter(f => selectedCategory === "All" || f.category === selectedCategory);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      
      {/* Fixed Search Header */}
      <View style={styles.topHeader}>
        <Text style={styles.headerTitle}>Explore Deals</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#64748B" />
          <TextInput 
            placeholder="Search stores or items..." 
            placeholderTextColor="#64748B"
            style={styles.searchInput}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Section 1: Trending Stores (Unique to Deals page) */}
        <Text style={styles.sectionLabel}>Trending Stores</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storeScroll}>
          {trendingStores.map(store => (
            <TouchableOpacity key={store.id} style={styles.storeCircle}>
              <View style={styles.logoFrame}>
                <Image source={{ uri: store.logo }} style={styles.storeLogo} />
              </View>
              <Text style={styles.storeName} numberOfLines={1}>{store.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Section 2: Category Tabs */}
        <View style={styles.tabContainer}>
          {["All", "Grocery", "Fashion", "Electronics"].map(cat => (
            <TouchableOpacity 
              key={cat} 
              onPress={() => setSelectedCategory(cat)}
              style={[styles.tab, selectedCategory === cat && styles.activeTab]}
            >
              <Text style={[styles.tabText, selectedCategory === cat && styles.activeTabText]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Section 3: Compact Grid (Differentiated from Home layout) */}
        <View style={styles.dealGrid}>
          {filtered.map(item => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.dealCard}
              onPress={() => router.push("/details")}
            >
              <Image source={{ uri: item.image }} style={styles.dealImage} />
              <View style={styles.discountBadge}>
                <Text style={styles.badgeText}>HOT</Text>
              </View>
              <View style={styles.dealInfo}>
                <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.itemStore}>{item.store}</Text>
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
  topHeader: { padding: 20, backgroundColor: "#0F172A" },
  headerTitle: { fontSize: 24, fontWeight: "800", color: "#F8FAFC", marginBottom: 15 },
  searchContainer: { 
    flexDirection: 'row', 
    backgroundColor: "#1E293B", 
    padding: 12, 
    borderRadius: 12, 
    alignItems: 'center' 
  },
  searchInput: { color: "#FFF", marginLeft: 10, flex: 1 },
  scrollContent: { paddingBottom: 30 },
  
  sectionLabel: { color: "#94A3B8", fontSize: 13, fontWeight: "700", textTransform: 'uppercase', marginHorizontal: 20, marginBottom: 15 },
  storeScroll: { paddingLeft: 20, marginBottom: 30 },
  storeCircle: { alignItems: 'center', marginRight: 20, width: 70 },
  logoFrame: { width: 60, height: 60, borderRadius: 30, backgroundColor: "#FFF", justifyContent: 'center', alignItems: 'center', marginBottom: 8, overflow: 'hidden' },
  storeLogo: { width: 40, height: 40, resizeMode: 'contain' },
  storeName: { color: "#F8FAFC", fontSize: 11, fontWeight: "600" },

  tabContainer: { flexDirection: 'row', marginHorizontal: 20, marginBottom: 20, gap: 10 },
  tab: { paddingVertical: 6, borderBottomWidth: 2, borderBottomColor: 'transparent' },
  activeTab: { borderBottomColor: '#F59E0B' },
  tabText: { color: "#64748B", fontWeight: "700", fontSize: 15 },
  activeTabText: { color: "#F8FAFC" },

  dealGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 15, justifyContent: 'space-between' },
  dealCard: { width: (width - 45) / 2, backgroundColor: "#1E293B", borderRadius: 16, marginBottom: 15, overflow: 'hidden', position: 'relative' },
  dealImage: { width: '100%', height: 160 },
  discountBadge: { position: 'absolute', top: 10, left: 10, backgroundColor: '#EF4444', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  badgeText: { color: '#FFF', fontSize: 10, fontWeight: '900' },
  dealInfo: { padding: 12 },
  itemTitle: { color: '#F8FAFC', fontSize: 14, fontWeight: '700' },
  itemStore: { color: '#94A3B8', fontSize: 11, marginTop: 4 },
});