import { useReducer, useRef, useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        products: [
          ...state.products,
          {
            id: Date.now(),
            name: action.name,
            quantity: 1,
          },
        ],
      };
    case "increment":
      return {
        products: state.products.map((p) =>
          p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
      };
    case "decrement":
      return {
        products: state.products.map((p) =>
          p.id === action.id && p.quantity > 1
            ? { ...p, quantity: p.quantity - 1 }
            : p
        ),
      };
    case "remove":
      return {
        products: state.products.filter((p) => p.id !== action.id),
      };
    case "clear":
      return { products: [] };
    default:
      return state;
  }
}

function InventoryManager() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(state.products));
  }, [state.products]);

  const handleAddProduct = useCallback(() => {
    if (inputRef.current.value.trim() !== "") {
      dispatch({ type: "add", name: inputRef.current.value });
      inputRef.current.value = "";
    }
  }, []);

  const handleIncrement = useCallback((id) => {
    dispatch({ type: "increment", id });
  }, []);

  const handleDecrement = useCallback((id) => {
    dispatch({ type: "decrement", id });
  }, []);

  const handleRemove = useCallback((id) => {
    dispatch({ type: "remove", id });
  }, []);

  const handleClear = useCallback(() => {
    dispatch({ type: "clear" });
  }, []);

  const filteredProducts = state.products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: "80vh",
        bgcolor: "#f7f9fc",
        display: "flex",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 550,
          bgcolor: "#fff",
          borderRadius: 3,
          p: 4,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h4" align="center" sx={{ color: "#b929ad" }}>
          Gestor de Inventario
          </Typography>

          <Stack direction="row" spacing={2}>
            <TextField
              inputRef={inputRef}
              label="Nombre del producto"
              fullWidth
              size="small"
              sx={{ bgcolor: "#f7f9fc" }}
            />
            <Button
              onClick={handleAddProduct}
              variant="contained"
              sx={{ bgcolor: "#b929ad", '&:hover': { bgcolor: "#a02199" } }}
            >
              Agregar
            </Button>
          </Stack>

          <TextField
            label="Buscar producto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            size="small"
            sx={{ bgcolor: "#f7f9fc" }}
          />

          <Divider sx={{ borderColor: "#ddd" }} />

          <Stack spacing={2}>
            {filteredProducts.map((product) => (
              <Box
                key={product.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  bgcolor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Typography sx={{ color: "#322e69" }}>
                  {product.name} - Cantidad: {product.quantity}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    onClick={() => handleIncrement(product.id)}
                    sx={{ bgcolor: "#322e69", color: "#fff", '&:hover': { bgcolor: "#271e55" } }}
                  >
                    <Add />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDecrement(product.id)}
                    sx={{ bgcolor: "#666", color: "#fff", '&:hover': { bgcolor: "#555" } }}
                  >
                    <Remove />
                  </IconButton>
                  <IconButton
                    onClick={() => handleRemove(product.id)}
                    sx={{ bgcolor: "#b929ad", color: "#fff", '&:hover': { bgcolor: "#a02199" } }}
                  >
                    <Delete />
                  </IconButton>
                </Stack>
              </Box>
            ))}
          </Stack>

          {state.products.length > 0 && (
            <Button
              onClick={handleClear}
              fullWidth
              sx={{ mt: 2, bgcolor: "#322e69", color: "#fff", '&:hover': { bgcolor: "#271e55" } }}
            >
              Vaciar Inventario
            </Button>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}

export default InventoryManager;
