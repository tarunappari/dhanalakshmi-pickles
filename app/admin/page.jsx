"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Package, DollarSign, Clock, CheckCircle, 
  Search, Filter, ChevronDown, X, Eye, 
  MoreVertical, Calendar, Truck, User,
  MapPin, Phone, Mail
} from "lucide-react";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrderItems = async (orderId) => {
    try {
      setLoadingItems(true);
      const { data, error } = await supabase
        .from("order_items")
        .select("*")
        .eq("order_id", orderId);

      if (error) throw error;
      setOrderItems(data || []);
    } catch (err) {
      console.error("Error fetching order items", err);
    } finally {
      setLoadingItems(false);
    }
  };

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      const { error } = await supabase
        .from("orders")
        .update({ order_status: newStatus })
        .eq("id", orderId);
        
      if (error) throw error;
      
      // Update local state
      setOrders(orders.map(o => o.id === orderId ? { ...o, order_status: newStatus } : o));
      if (selectedOrder?.id === orderId) {
        setSelectedOrder({ ...selectedOrder, order_status: newStatus });
      }
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status");
    }
  };

  const openOrderDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
    fetchOrderItems(order.id);
  };

  const closeOrderDetails = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedOrder(null);
      setOrderItems([]);
    }, 300);
  };

  // Formatting utils
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(dateString));
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'placed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'processing': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'shipped': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'delivered': return 'bg-green-100 text-green-700 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'paid': return 'bg-emerald-100 text-emerald-700';
      case 'pending': return 'bg-amber-100 text-amber-700';
      case 'failed': return 'bg-rose-100 text-rose-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredOrders = orders.filter(o => {
    const matchesSearch = 
      o.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      o.id?.toString().includes(searchTerm) ||
      o.razorpay_order_id?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = statusFilter === 'all' || o.order_status === statusFilter;
    
    let matchesDate = true;
    if (dateFilter !== 'all') {
      const orderDate = new Date(o.created_at);
      const now = new Date();
      
      if (dateFilter === 'today') {
        matchesDate = orderDate.toDateString() === now.toDateString();
      } else if (dateFilter === '7days') {
        const sevenDaysAgo = new Date(now);
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        matchesDate = orderDate >= sevenDaysAgo;
      } else if (dateFilter === '30days') {
        const thirtyDaysAgo = new Date(now);
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        matchesDate = orderDate >= thirtyDaysAgo;
      }
    }

    return matchesSearch && matchesFilter && matchesDate;
  });

  // Derived stats (Now based on filteredOrders to dynamically reflect applied date/status filters)
  const totalRevenue = filteredOrders.reduce((sum, order) => sum + Number(order.total_amount || 0), 0);
  const totalOrdersCount = filteredOrders.length;
  const pendingOrdersCount = filteredOrders.filter(o => o.order_status === "placed" || o.order_status === "processing").length;
  const deliveredOrdersCount = filteredOrders.filter(o => o.order_status === "delivered").length;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-800 p-4 md:p-8 pt-24 md:pt-32 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-500 mt-1">Manage your orders and track store performance.</p>
          </div>
          <button 
            onClick={fetchOrders}
            className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors shadow-sm font-medium"
          >
            Refresh Data
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Total Revenue" 
            value={formatCurrency(totalRevenue)} 
            icon={<DollarSign className="w-5 h-5 text-emerald-600" />} 
          />
          <StatCard 
            title="Total Orders" 
            value={totalOrdersCount} 
            icon={<Package className="w-5 h-5 text-blue-600" />} 
          />
          <StatCard 
            title="Pending Actions" 
            value={pendingOrdersCount} 
            icon={<Clock className="w-5 h-5 text-amber-600" />} 
          />
          <StatCard 
            title="Delivered" 
            value={deliveredOrdersCount} 
            icon={<CheckCircle className="w-5 h-5 text-green-600" />} 
          />
        </div>

        {/* Main Orders Table Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Table Header Controls */}
          <div className="p-4 md:p-6 border-b border-gray-100 bg-white flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by ID or customer name..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium placeholder:text-gray-400 placeholder:font-normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
              
              {/* Date Filter */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Calendar className="h-4 w-4 text-gray-500" />
                <select
                  className="w-full md:w-auto bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none cursor-pointer"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="7days">Last 7 Days</option>
                  <option value="30days">Last 30 Days</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  className="w-full md:w-auto bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none cursor-pointer"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                <option value="all">All Orders</option>
                <option value="placed">Placed</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-400 uppercase bg-gray-50/50 block md:table-header-group">
                <tr className="block md:table-row border-b border-gray-100">
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Order ID</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Customer</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Total</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Payment</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-4 font-medium tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {loading ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center block md:table-cell">
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-gray-500 font-medium">Loading orders...</span>
                      </div>
                    </td>
                  </tr>
                ) : filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-gray-500 font-medium block md:table-cell">
                      No orders found.
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <motion.tr 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={order.id} 
                      className="bg-white border-b border-gray-50 hover:bg-gray-50/80 transition-colors block md:table-row cursor-pointer group"
                      onClick={() => openOrderDetails(order)}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 block md:table-cell" data-label="Order ID">
                        #{order.id?.toString().slice(0, 8)}...
                      </td>
                      <td className="px-6 py-4 block md:table-cell" data-label="Customer">
                        <div className="font-medium text-gray-900">{order.customer_name}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{order.email}</div>
                      </td>
                      <td className="px-6 py-4 block md:table-cell whitespace-nowrap" data-label="Date">
                        {formatDate(order.created_at)}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 block md:table-cell" data-label="Total">
                        {formatCurrency(order.total_amount)}
                      </td>
                      <td className="px-6 py-4 block md:table-cell" data-label="Payment">
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-md flex inline-flex items-center gap-1 w-max ${getPaymentStatusColor(order.payment_status)}`}>
                          {order.payment_status?.toUpperCase() || 'UNKNOWN'}
                        </span>
                      </td>
                      <td className="px-6 py-4 block md:table-cell" data-label="Status">
                        <select
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => handleUpdateStatus(order.id, e.target.value)}
                          value={order.order_status}
                          className={`px-3 py-1 text-xs font-semibold rounded-full border appearance-none cursor-pointer outline-none transition-colors w-max block ${getStatusColor(order.order_status)}`}
                        >
                          <option value="placed">Placed</option>
                          <option value="processing">Processing</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-right block md:table-cell">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            openOrderDetails(order);
                          }}
                          className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors group-hover:text-amber-600"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeOrderDetails}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-10">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-gray-900">Order Details</h2>
                  <p className="text-sm text-gray-500 mt-0.5">#{selectedOrder.razorpay_order_id || selectedOrder.id}</p>
                </div>
                <button 
                  onClick={closeOrderDetails}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Customer Info */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <User className="w-4 h-4 text-amber-500" /> Customer Information
                    </h3>
                    <div className="bg-gray-50/80 p-4 rounded-xl space-y-3 text-sm border border-gray-100">
                      <div className="flex items-start gap-3">
                        <User className="w-4 h-4 text-gray-400 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-900">{selectedOrder.customer_name}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-gray-400 mt-0.5" />
                        <p className="text-gray-600 break-all">{selectedOrder.email}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
                        <p className="text-gray-600">{selectedOrder.phone}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                        <p className="text-gray-600">
                          {selectedOrder.address}, {selectedOrder.city} - {selectedOrder.pincode}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                      <Package className="w-4 h-4 text-amber-500" /> Order Summary
                    </h3>
                    <div className="bg-gray-50/80 p-4 rounded-xl space-y-4 text-sm border border-gray-100">
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200 border-dashed">
                        <span className="text-gray-500">Date Placed</span>
                        <span className="font-medium text-gray-900">{formatDate(selectedOrder.created_at)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200 border-dashed">
                        <span className="text-gray-500">Payment Status</span>
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded ${getPaymentStatusColor(selectedOrder.payment_status)}`}>
                          {selectedOrder.payment_status?.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-gray-200 border-dashed">
                        <span className="text-gray-500">Order Status</span>
                        <select
                          className={`px-2 py-1 text-xs font-bold rounded-md outline-none cursor-pointer border ${getStatusColor(selectedOrder.order_status)}`}
                          value={selectedOrder.order_status}
                          onChange={(e) => handleUpdateStatus(selectedOrder.id, e.target.value)}
                        >
                          <option value="placed">Placed</option>
                          <option value="processing">Processing</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-base font-bold text-gray-900">Total Amount</span>
                        <span className="text-lg font-black text-amber-600">{formatCurrency(selectedOrder.total_amount)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                    <Truck className="w-4 h-4 text-amber-500" /> Items Ordered
                  </h3>
                  
                  {loadingItems ? (
                    <div className="py-8 flex justify-center">
                      <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : orderItems.length === 0 ? (
                    <div className="py-8 text-center text-gray-500 bg-gray-50/50 rounded-xl border border-gray-100 border-dashed">
                      No items found for this order.
                    </div>
                  ) : (
                    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                      {orderItems.map((item, index) => (
                        <div 
                          key={item.id || index} 
                          className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center text-amber-500">
                              <Package className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{item.name}</p>
                              <p className="text-sm text-gray-500">Qty: {item.quantity} × {formatCurrency(item.price)}</p>
                            </div>
                          </div>
                          <div className="font-bold text-gray-900">
                            {formatCurrency(item.price * item.quantity)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Utility Component for Stats
function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-[-10px] right-[-10px] p-4 opacity-5 group-hover:scale-150 group-hover:opacity-10 transition-all duration-500">
        {React.cloneElement(icon, { className: "w-24 h-24" })}
      </div>
      <div className="space-y-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-gray-600 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
            {icon}
          </div>
          <p className="text-sm font-semibold text-gray-500 tracking-wide">{title}</p>
        </div>
        <p className="text-3xl font-black text-gray-900 tracking-tight">{value}</p>
      </div>
    </div>
  );
}