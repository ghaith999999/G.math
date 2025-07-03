const questions = [
  {
    text: "If $$A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$$, what is $$\\det(A)$$?",
    choices: [
      "$$10$$",
      "$$-2$$",
      "$$2$$",
      "$$-10$$"
    ],
    answer: 1,
    explanation: "Using $$\\det(A) = ad - bc = (1)(4) - (2)(3) = 4 - 6 = -2$$."
  },
  {
    text: "Let $$T(v) = \\lambda v$$. What is $$\\lambda$$ called?",
    choices: [
      "Determinant",
      "Eigenvalue",
      "Vector norm",
      "Trace"
    ],
    answer: 1,
    explanation: "$$\\lambda$$ is the eigenvalue corresponding to eigenvector $$v$$."
  },
  {
    text: "Which expression gives the inverse of a 2x2 matrix $$A = \\begin{bmatrix}a & b\\\\c & d\\end{bmatrix}$$?",
    choices: [
      "$$\\frac{1}{ad-bc} \\begin{bmatrix}d & -b\\\\-c & a\\end{bmatrix}$$",
      "$$\\frac{1}{ab-cd} \\begin{bmatrix}-a & b\\\\-c & d\\end{bmatrix}$$",
      "$$\\frac{1}{ad+bc} \\begin{bmatrix}a & c\\\\b & d\\end{bmatrix}$$",
      "$$\\frac{1}{ab+cd} I$$"
    ],
    answer: 0,
    explanation: "The inverse of a 2x2 matrix is $$\\frac{1}{ad - bc} \\begin{bmatrix}d & -b\\\\-c & a\\end{bmatrix}$$, provided $$\\det(A) \\ne 0$$."
  },{
  text: "Which of the following matrices is symmetric?",
  choices: [
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 2 \\\\ -2 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 2 \\\\ 3 & 4\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1 \\\\ 1 & 0\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "A symmetric matrix satisfies $$A = A^T$$. The identity matrix is always symmetric."
},
{
  text: "What is the transpose of $$A = \\begin{bmatrix}1 & 2 & 3\\\\4 & 5 & 6\\end{bmatrix}$$?",
  choices: [
    "$$\\begin{bmatrix}1 & 4 \\\\ 2 & 5 \\\\ 3 & 6\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 2 \\\\ 4 & 5\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 2 & 3 \\\\ 6 & 5 & 4\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 4 \\\\ 3 & 6\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Transpose: flip rows into columns."
},
{
  text: "If $$A$$ is invertible, what is $$A^{-1}A$$?",
  choices: ["0", "Identity matrix", "Transpose", "$$\\det(A)$$"],
  answer: 1,
  explanation: "By definition of the inverse matrix, $$A^{-1}A = I$$."
},
{
  text: "The trace of $$\\begin{bmatrix}3 & 1\\\\0 & -2\\end{bmatrix}$$ is:",
  choices: ["1", "5", "$$-5$$", "$$\\boxed{1}$$"],
  answer: 0,
  explanation: "Trace = sum of diagonal elements: $$3 + (-2) = 1$$."
},
{
  text: "Which of the following has linearly dependent columns?",
  choices: [
    "$$\\begin{bmatrix}1 & 2 \\\\ 3 & 6\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}2 & -1 \\\\ 4 & 3\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1 \\\\ 1 & 0\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Second column is a multiple of the first: linear dependence."
},
{
  text: "What is the rank of $$\\begin{bmatrix}1 & 2 & 3\\\\2 & 4 & 6\\\\3 & 6 & 9\\end{bmatrix}$$?",
  choices: ["3", "0", "1", "2"],
  answer: 2,
  explanation: "All rows are linearly dependent; only one pivot → rank = 1."
},
{
  text: "In Gaussian elimination, what is a pivot element?",
  choices: [
    "An entry on the diagonal",
    "A leading non-zero entry in a row",
    "Any zero below the diagonal",
    "A determinant of a matrix"
  ],
  answer: 1,
  explanation: "Pivot = first nonzero in a row used for elimination below."
},
{
  text: "What does $$\\text{nullity}(A)$$ represent?",
  choices: [
    "Number of linearly independent rows",
    "Dimension of column space",
    "Dimension of null space",
    "The inverse of A"
  ],
  answer: 2,
  explanation: "Nullity is the dimension of $$\\ker(A)$$ — the solution space of $$Ax = 0$$."
},
{
  text: "Which of these matrices is orthogonal?",
  choices: [
    "$$\\begin{bmatrix}1 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{bmatrix}$$",
    "All of the above"
  ],
  answer: 3,
  explanation: "All these matrices satisfy $$Q^T Q = I$$ → orthogonal."
},
{
  text: "If $$\\lambda$$ is an eigenvalue of $$A$$, then which of the following is true?",
  choices: [
    "$$Av = \\lambda v$$ for some nonzero vector $$v$$",
    "$$A + \\lambda = 0$$",
    "$$A = \\lambda I$$ always",
    "$$\\det(A) = \\lambda$$"
  ],
  answer: 0,
  explanation: "By definition of eigenvalues: $$Av = \\lambda v$$."
},{
  text: "Which condition must hold true for a matrix $$A$$ to be invertible?",
  choices: [
    "$$\\det(A) = 0$$",
    "$$\\text{rank}(A) = 0$$",
    "$$\\det(A) \\ne 0$$",
    "It must be diagonal"
  ],
  answer: 2,
  explanation: "A square matrix $$A$$ is invertible if and only if $$\\det(A) \\ne 0$$."
},
{
  text: "Find the trace of $$\\begin{bmatrix}7 & 2 \\\\ 5 & -3\\end{bmatrix}$$",
  choices: ["4", "$$-4$$", "2", "10"],
  answer: 1,
  explanation: "Trace = sum of diagonals: $$7 + (-3) = 4$$"
},
{
  text: "If columns of a square matrix are linearly dependent, which is true?",
  choices: [
    "Matrix is invertible",
    "Determinant is non-zero",
    "Matrix is singular",
    "Matrix must be diagonal"
  ],
  answer: 2,
  explanation: "Linear dependence among columns implies determinant = 0 → singular matrix."
},
{
  text: "What is the result of $$A^T A$$ when A is an $$m \\times n$$ matrix?",
  choices: [
    "$$m \\times n$$ matrix",
    "$$n \\times n$$ matrix",
    "$$m \\times m$$ matrix",
    "Identity matrix"
  ],
  answer: 1,
  explanation: "$$A^T A$$ results in a square matrix of size $$n \\times n$$."
},
{
  text: "What is the first step in Gaussian elimination?",
  choices: [
    "Find inverse of A",
    "Use backward substitution",
    "Use forward elimination to create zeros below pivots",
    "Calculate determinant"
  ],
  answer: 2,
  explanation: "The goal is to create upper triangular form via forward elimination."
},
{
  text: "Let $$A = I$$. What is $$A^{-1}$$?",
  choices: [
    "$$0$$",
    "$$A^T$$",
    "$$I$$",
    "$$-I$$"
  ],
  answer: 2,
  explanation: "The identity matrix is its own inverse: $$I^{-1} = I$$"
},
{
  text: "If $$\\det(A) = 5$$, what is $$\\det(2A)$$ for a 3x3 matrix?",
  choices: [
    "10",
    "30",
    "40",
    "120"
  ],
  answer: 3,
  explanation: "$$\\det(kA) = k^n \\cdot \\det(A)$$ → $$2^3 \\cdot 5 = 8 \\cdot 5 = 40$$"
},
{
  text: "Which of the following statements is true about eigenvectors?",
  choices: [
    "Eigenvectors are always orthogonal",
    "Eigenvectors satisfy $$Av = \\lambda v$$",
    "Eigenvectors form diagonal matrices",
    "Eigenvectors have determinant zero"
  ],
  answer: 1,
  explanation: "By definition: $$Av = \\lambda v$$, where $$v \\ne 0$$"
},
{
  text: "In a homogeneous system $$Ax = 0$$, if $$\\det(A) \\ne 0$$, what is the solution?",
  choices: [
    "Infinitely many",
    "No solution",
    "Unique solution: $$x = 0$$",
    "Nonzero solution only"
  ],
  answer: 2,
  explanation: "If $$\\det(A) \\ne 0$$, matrix is invertible → only solution is $$x = 0$$"
},
{
  text: "What is the null space of the identity matrix $$I_n$$?",
  choices: [
    "$$\\mathbb{R}^n$$",
    "The zero vector only",
    "Diagonal subspace",
    "All row vectors"
  ],
  answer: 1,
  explanation: "Since $$Ix = x$$, the only solution to $$Ix = 0$$ is $$x = 0$$"
},{
  text: "Which decomposition writes a matrix $$A$$ as $$A = LU$$ where $$L$$ is lower triangular and $$U$$ is upper?",
  choices: [
    "QR decomposition",
    "LU decomposition",
    "SVD decomposition",
    "Gauss–Jordan method"
  ],
  answer: 1,
  explanation: "LU decomposition splits $$A$$ into $$L$$ (lower) and $$U$$ (upper) matrices such that $$A = LU$$."
},
{
  text: "In Gram–Schmidt process, what is the goal?",
  choices: [
    "Compute determinant",
    "Convert basis to orthonormal set",
    "Diagonalize matrix",
    "Find null space"
  ],
  answer: 1,
  explanation: "Gram–Schmidt transforms a set of linearly independent vectors into an orthonormal set."
},
{
  text: "Which of the following matrices is diagonalizable?",
  choices: [
    "$$A = \\begin{bmatrix}1 & 1 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$A = \\begin{bmatrix}2 & 0 \\\\ 0 & 3\\end{bmatrix}$$",
    "$$A = \\begin{bmatrix}0 & 1 \\\\ -1 & 0\\end{bmatrix}$$",
    "None of the above"
  ],
  answer: 1,
  explanation: "A diagonal matrix is trivially diagonalizable; its eigenvectors are standard basis."
},
{
  text: "If T is a linear transformation, what is the image of T?",
  choices: [
    "Set of all inputs",
    "Set of scalars",
    "Set of outputs $$T(v)$$",
    "The kernel of T"
  ],
  answer: 2,
  explanation: "The image or range is the set of all vectors that are outputs: $$\\text{Im}(T) = \\{T(v)\\}$$."
},
{
  text: "The standard matrix of reflection over the x-axis is:",
  choices: [
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & -1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}-1 & 0 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1 \\\\ 1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Reflection over x-axis negates y-coordinate."
},
{
  text: "For a transformation $$T: \\mathbb{R}^2 \\to \\mathbb{R}^2$$ to be invertible, what must be true about its matrix $$A$$?",
  choices: [
    "$$\\det(A) = 0$$",
    "Columns of A are dependent",
    "$$\\text{rank}(A) = 1$$",
    "A must be square and $$\\det(A) \\ne 0$$"
  ],
  answer: 3,
  explanation: "The matrix must be square and nonsingular to be invertible."
},
{
  text: "What is the geometric interpretation of the determinant of a 2×2 matrix?",
  choices: [
    "Area scaling factor",
    "Length of a vector",
    "Volume of unit cube",
    "Trace of the matrix"
  ],
  answer: 0,
  explanation: "In 2D, the absolute value of the determinant gives area scaling under transformation."
},
{
  text: "If $$A^T = A$$, then matrix A is:",
  choices: [
    "Skew-symmetric",
    "Symmetric",
    "Orthogonal",
    "Non-invertible"
  ],
  answer: 1,
  explanation: "A matrix equal to its transpose is symmetric."
},
{
  text: "Which matrix represents a projection onto the x-axis in $$\\mathbb{R}^2$$?",
  choices: [
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 0 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1 \\\\ 1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 1 \\\\ 0 & 0\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Projection onto x-axis maps all vectors to the form $$\\begin{bmatrix}x \\\\ 0\\end{bmatrix}$$."
},
{
  text: "If a square matrix has n distinct eigenvalues, it is always:",
  choices: [
    "Invertible",
    "Orthogonal",
    "Diagonalizable",
    "Singular"
  ],
  answer: 2,
  explanation: "If all eigenvalues are distinct, matrix has n linearly independent eigenvectors → diagonalizable."
},{
  text: "What is the inverse of the identity matrix $$I_n$$?",
  choices: [
    "$$I_n^{-1} = 0$$",
    "$$I_n^{-1} = I_n$$",
    "$$I_n^{-1} = -I_n$$",
    "Identity matrix has no inverse"
  ],
  answer: 1,
  explanation: "The identity matrix is its own inverse: $$I_n^{-1} = I_n$$."
},
{
  text: "Which of the following matrices has an inverse?",
  choices: [
    "$$\\begin{bmatrix}2 & 4\\\\1 & 2\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0\\\\0 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 2\\\\3 & 4\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 0\\\\0 & 0\\end{bmatrix}$$"
  ],
  answer: 2,
  explanation: "Only this matrix has $$\\det \\ne 0$$, so it is invertible."
},
{
  text: "How many pivot positions exist in the matrix $$\\begin{bmatrix}1 & 2\\\\0 & 3\\\\0 & 0\\end{bmatrix}$$?",
  choices: ["1", "2", "3", "0"],
  answer: 2,
  explanation: "There is a pivot in row 1 and row 2 → two pivot positions."
},
{
  text: "If $$A$$ is symmetric, then which statement must hold?",
  choices: [
    "$$A^{-1} = A$$",
    "$$A^T = A$$",
    "$$\\det(A) = 1$$",
    "$$A$$ is skew-symmetric"
  ],
  answer: 1,
  explanation: "By definition, a symmetric matrix satisfies $$A^T = A$$."
},
{
  text: "The solution to $$Ax = b$$ using Cramer’s Rule requires:",
  choices: [
    "$$A$$ is diagonal",
    "$$\\det(A) \\ne 0$$",
    "b is in $$\\text{Col}(A)$$",
    "$$A$$ is orthogonal"
  ],
  answer: 1,
  explanation: "Cramer's Rule only works for square matrices with nonzero determinant."
},
{
  text: "In eigen decomposition, matrix $$A$$ can be expressed as:",
  choices: [
    "$$A = PDP^{-1}$$",
    "$$A = PLP^T$$",
    "$$A = LDU$$",
    "$$A = QR$$"
  ],
  answer: 0,
  explanation: "If $$A$$ is diagonalizable, then $$A = PDP^{-1}$$ with $$D$$ diagonal and $$P$$ eigenvectors."
},
{
  text: "What is the determinant of an upper triangular matrix?",
  choices: [
    "Product of diagonal entries",
    "Always zero",
    "Sum of last column",
    "Trace of the matrix"
  ],
  answer: 0,
  explanation: "For triangular matrices, $$\\det(A) = a_{11} \\cdot a_{22} \\cdot ... \\cdot a_{nn}$$."
},
{
  text: "Which of the following represents an orthonormal basis?",
  choices: [
    "$$\\left\\{\\begin{bmatrix}1\\\\1\\end{bmatrix}, \\begin{bmatrix}0\\\\1\\end{bmatrix}\\right\\}$$",
    "$$\\left\\{\\begin{bmatrix}1\\\\0\\end{bmatrix}, \\begin{bmatrix}0\\\\1\\end{bmatrix}\\right\\}$$",
    "$$\\left\\{\\begin{bmatrix}1\\\\1\\end{bmatrix}, \\begin{bmatrix}-1\\\\1\\end{bmatrix}\\right\\}$$",
    "$$\\left\\{\\begin{bmatrix}2\\\\0\\end{bmatrix}, \\begin{bmatrix}0\\\\2\\end{bmatrix}\\right\\}$$"
  ],
  answer: 1,
  explanation: "They are unit vectors and orthogonal → orthonormal."
},
{
  text: "If $$Av = \\lambda v$$ and $$\\lambda = 0$$, then:",
  choices: [
    "$$v$$ is an eigenvector of $$A$$",
    "$$v = 0$$ always",
    "$$A$$ is invertible",
    "$$\\det(A) = 1$$"
  ],
  answer: 0,
  explanation: "If $$Av = 0$$ with $$v \\ne 0$$, then 0 is an eigenvalue and $$v$$ is eigenvector."
},
{
  text: "Which property always holds for the inverse of an orthogonal matrix $$Q$$?",
  choices: [
    "$$Q^{-1} = Q^2$$",
    "$$Q^{-1} = Q$$",
    "$$Q^{-1} = Q^T$$",
    "$$Q^{-1} = -Q$$"
  ],
  answer: 2,
  explanation: "Orthogonal matrix satisfies $$Q^T Q = I$$ → $$Q^{-1} = Q^T$$."
},{
  text: "What does the Singular Value Decomposition (SVD) of a matrix $$A$$ decompose it into?",
  choices: [
    "$$A = LU$$",
    "$$A = QR$$",
    "$$A = U\\Sigma V^T$$",
    "$$A = PDP^{-1}$$"
  ],
  answer: 2,
  explanation: "SVD decomposes $$A$$ into an orthogonal matrix $$U$$, diagonal matrix $$\\Sigma$$, and orthogonal matrix $$V^T$$."
},
{
  text: "What is the rank of a diagonal matrix with two nonzero diagonal entries?",
  choices: ["0", "1", "2", "It depends"],
  answer: 2,
  explanation: "Rank = number of nonzero rows or pivot positions. Two nonzero diagonals means rank = 2."
},
{
  text: "Which transformation stretches vectors only along one axis?",
  choices: [
    "Orthogonal transformation",
    "Rotation matrix",
    "Shear matrix",
    "Scaling matrix"
  ],
  answer: 3,
  explanation: "Scaling matrix applies a scalar factor along a specific axis."
},
{
  text: "If $$A$$ is a matrix and $$A^2 = A$$, then $$A$$ is called:",
  choices: [
    "Symmetric",
    "Idempotent",
    "Diagonalizable",
    "Orthogonal"
  ],
  answer: 1,
  explanation: "Idempotent matrices satisfy $$A^2 = A$$."
},
{
  text: "What is the eigenvalue of the identity matrix $$I_n$$?",
  choices: [
    "$$0$$",
    "$$n$$",
    "$$1$$",
    "Depends on size"
  ],
  answer: 2,
  explanation: "All eigenvalues of $$I$$ are 1, since $$Iv = v$$."
},
{
  text: "Which of the following always has orthonormal columns?",
  choices: [
    "Upper triangular matrix",
    "Singular matrix",
    "Orthogonal matrix",
    "Symmetric matrix"
  ],
  answer: 2,
  explanation: "Orthogonal matrix has columns that are orthonormal → $$Q^T Q = I$$."
},
{
  text: "Let $$T: \\mathbb{R}^n \\to \\mathbb{R}^m$$ be a linear transformation. What is the dimension of its image?",
  choices: [
    "Always n",
    "$$\\text{rank}(T)$$",
    "$$n - 1$$",
    "$$m - n$$"
  ],
  answer: 1,
  explanation: "The rank of $$T$$ equals the dimension of its image."
},
{
  text: "What is the determinant of a diagonal matrix $$D$$?",
  choices: [
    "Sum of diagonals",
    "Always 1",
    "Trace of $$D$$",
    "Product of diagonal entries"
  ],
  answer: 3,
  explanation: "The determinant of a diagonal matrix is the product of its diagonal elements."
},
{
  text: "If $$A$$ is diagonalizable, which of the following is true?",
  choices: [
    "$$A = A^T$$",
    "$$A$$ has n distinct eigenvalues",
    "$$A$$ is invertible only",
    "$$A$$ has only zero eigenvalues"
  ],
  answer: 1,
  explanation: "A matrix with $$n$$ distinct eigenvalues is always diagonalizable."
},
{
  text: "Which matrix has no inverse?",
  choices: [
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 0 \\\\ 0 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}2 & 1 \\\\ 3 & 4\\end{bmatrix}$$",
    "$$\\begin{bmatrix}-1 & 0 \\\\ 0 & -1\\end{bmatrix}$$"
  ],
  answer: 1,
  explanation: "Matrix with all zero entries has determinant zero → singular → no inverse."
},{
  text: "If a matrix is symmetric and has real eigenvalues, it can be:",
  choices: [
    "Diagonalized using complex eigenvectors",
    "Only represented in Jordan form",
    "Orthogonally diagonalized",
    "Never diagonalized"
  ],
  answer: 2,
  explanation: "Spectral Theorem states that any real symmetric matrix can be diagonalized using an orthonormal basis of eigenvectors."
},
{
  text: "Which of the following matrices represents a counterclockwise rotation in $$\\mathbb{R}^2$$ by angle $$\\theta$$?",
  choices: [
    "$$\\begin{bmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{bmatrix}$$",
    "$$\\begin{bmatrix}\\cos\\theta & \\sin\\theta\\\\ -\\sin\\theta & \\cos\\theta\\end{bmatrix}$$",
    "$$\\begin{bmatrix}\\cos\\theta & 0\\\\ 0 & \\cos\\theta\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & \\theta\\\\ 0 & 1\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Standard rotation matrix in $$\\mathbb{R}^2$$ is $$\\begin{bmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{bmatrix}$$."
},
{
  text: "A positive definite matrix satisfies which of the following?",
  choices: [
    "All eigenvalues are negative",
    "$$x^T A x > 0$$ for all nonzero $$x$$",
    "Symmetric with trace 0",
    "$$A = A^{-1}$$"
  ],
  answer: 1,
  explanation: "A matrix is positive definite if it is symmetric and $$x^T A x > 0$$ for all nonzero vectors $$x$$."
},
{
  text: "What is the covariance matrix of a data matrix $$X$$?",
  choices: [
    "$$X X^T$$",
    "$$X^T X$$",
    "$$\\frac{1}{n-1}(X - \\bar{X})^T(X - \\bar{X})$$",
    "$$\\det(X)$$"
  ],
  answer: 2,
  explanation: "The covariance matrix captures spread and direction of data. It's computed after centering $$X$$ by its mean."
},
{
  text: "Which transformation preserves angles and lengths in $$\\mathbb{R}^n$$?",
  choices: [
    "Orthogonal transformation",
    "Projection matrix",
    "Shear transformation",
    "Scaling matrix"
  ],
  answer: 0,
  explanation: "Orthogonal transformations preserve inner products → angles and lengths are preserved."
},
{
  text: "The projection matrix onto a subspace $$W$$ is:",
  choices: [
    "Always invertible",
    "Always symmetric and idempotent",
    "Always diagonal",
    "Always orthogonal"
  ],
  answer: 1,
  explanation: "Projection matrices satisfy $$P^2 = P$$ and $$P^T = P$$."
},
{
  text: "Which of the following can reduce a matrix to diagonal form?",
  choices: [
    "Gaussian elimination",
    "Spectral decomposition",
    "Matrix multiplication",
    "Null space projection"
  ],
  answer: 1,
  explanation: "Spectral decomposition expresses symmetric matrices in terms of their eigenvalues and orthonormal eigenvectors."
},
{
  text: "A matrix is orthogonal if its columns are:",
  choices: [
    "Linearly dependent",
    "Linearly independent and orthonormal",
    "Diagonal",
    "Upper triangular"
  ],
  answer: 1,
  explanation: "Orthogonal matrices have orthonormal columns (unit length and orthogonal)."
},
{
  text: "Which norm is defined as $$\\|x\\| = \\sqrt{x_1^2 + x_2^2 + ... + x_n^2}$$?",
  choices: [
    "L1 norm",
    "Infinity norm",
    "Frobenius norm",
    "Euclidean norm"
  ],
  answer: 3,
  explanation: "This is the standard Euclidean (L2) norm used to measure vector length."
},
{
  text: "For any orthogonal matrix $$Q$$, what is $$\\det(Q)$$?",
  choices: [
    "Always 1",
    "Always -1",
    "Either +1 or -1",
    "Always 0"
  ],
  answer: 2,
  explanation: "Orthogonal matrices preserve length and orientation → $$\\det(Q) = ±1$$."
},{
  text: "Let $$A$$ be a real symmetric matrix. Which of the following is always true?",
  choices: [
    "All eigenvalues are complex",
    "It has no inverse",
    "It is orthogonally diagonalizable",
    "It is skew-symmetric"
  ],
  answer: 2,
  explanation: "By the Spectral Theorem, real symmetric matrices are always orthogonally diagonalizable."
},
{
  text: "If $$A$$ is a $$3 \\times 3$$ matrix and $$\\text{rank}(A) = 3$$, then:",
  choices: [
    "$$A$$ is not invertible",
    "The system $$Ax = 0$$ has infinite solutions",
    "$$\\det(A) = 0$$",
    "$$A$$ is invertible and full rank"
  ],
  answer: 3,
  explanation: "Rank = number of pivots = 3 → full rank → $$A$$ is invertible."
},
{
  text: "The matrix $$P = A(A^T A)^{-1}A^T$$ represents:",
  choices: [
    "Projection onto null space",
    "Projection onto column space of $$A$$",
    "Rotation matrix",
    "Scaling transformation"
  ],
  answer: 1,
  explanation: "This is the projection matrix onto $$\\text{Col}(A)$$ in least-squares solutions."
},
{
  text: "Which matrix satisfies $$Q^T Q = I$$?",
  choices: [
    "Symmetric",
    "Orthogonal",
    "Skew-symmetric",
    "Diagonal"
  ],
  answer: 1,
  explanation: "By definition, $$Q$$ is orthogonal if $$Q^T Q = I$$."
},
{
  text: "What is the nullity of a $$4 \\times 5$$ matrix with rank 3?",
  choices: [
    "2",
    "1",
    "4",
    "3"
  ],
  answer: 0,
  explanation: "Nullity = number of columns − rank = 5 − 3 = 2."
},
{
  text: "Which matrix satisfies both $$A^T = A$$ and $$A^2 = A$$?",
  choices: [
    "Identity matrix",
    "Zero matrix",
    "Projection matrix",
    "Any invertible matrix"
  ],
  answer: 2,
  explanation: "Projection matrices are symmetric and idempotent (i.e., $$A^2 = A$$)."
},
{
  text: "The Frobenius norm of a matrix $$A$$ is defined as:",
  choices: [
    "$$\\sum a_{ij}$$",
    "$$\\sqrt{\\sum a_{ij}^2}$$",
    "$$\\det(A)$$",
    "$$\\text{Tr}(A^T A)$$"
  ],
  answer: 1,
  explanation: "Frobenius norm is the square root of the sum of all squared entries."
},
{
  text: "If two vectors have a dot product of zero, they are:",
  choices: [
    "Parallel",
    "Orthogonal",
    "Dependent",
    "Equal"
  ],
  answer: 1,
  explanation: "Dot product zero ⇒ vectors are perpendicular (orthogonal)."
},
{
  text: "Let $$A$$ be $$n \\times n$$. If $$\\det(A) = 1$$ and $$A^T = A^{-1}$$, then $$A$$ is:",
  choices: [
    "Symmetric",
    "Diagonalizable",
    "Orthogonal with determinant 1",
    "Skew-symmetric"
  ],
  answer: 2,
  explanation: "$$A^T = A^{-1}$$ ⇒ orthogonal; $$\\det(A) = 1$$ confirms it’s special orthogonal."
},
{
  text: "Which matrix transformation reflects a vector about the line $$y = x$$?",
  choices: [
    "$$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0\\\\0 & -1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}-1 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & -1\\\\-1 & 0\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Reflection about $$y = x$$ swaps coordinates → matrix: $$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$."
},{
  text: "Which of the following transformations preserves both lengths and angles?",
  choices: [
    "Projection",
    "Orthogonal transformation",
    "Scaling matrix",
    "Shear matrix"
  ],
  answer: 1,
  explanation: "Orthogonal transformations preserve inner products, so lengths and angles are preserved."
},
{
  text: "If 0 is an eigenvalue of matrix $$A$$, then:",
  choices: [
    "$$A$$ is invertible",
    "Columns of $$A$$ are linearly independent",
    "$$A$$ is not full rank",
    "$$A$$ is diagonal"
  ],
  answer: 2,
  explanation: "Eigenvalue 0 implies $$\\det(A) = 0$$ → matrix is singular → not full rank."
},
{
  text: "What is the rank of a matrix that maps $$\\mathbb{R}^4$$ to a 2D plane?",
  choices: ["0", "2", "3", "4"],
  answer: 1,
  explanation: "The rank equals the dimension of the image → the 2D plane → rank = 2."
},
{
  text: "Which of the following is always orthogonal to every vector in the column space of $$A$$?",
  choices: [
    "Row space of $$A$$",
    "Null space of $$A$$",
    "Column space of $$A^T$$",
    "Left null space of $$A$$"
  ],
  answer: 3,
  explanation: "The left null space is orthogonal complement to the column space."
},
{
  text: "Let $$A$$ be a square matrix with all eigenvalues $$< 1$$ in absolute value. Then $$A^k$$ as $$k \\to \\infty$$:",
  choices: [
    "Diverges",
    "Becomes identity",
    "Goes to zero matrix",
    "Oscillates"
  ],
  answer: 2,
  explanation: "Since all eigenvalues $$|\\lambda| < 1$$, powers of $$A$$ tend to zero."
},
{
  text: "Which of the following best defines a vector subspace?",
  choices: [
    "Any collection of vectors",
    "A set closed under addition and scalar multiplication",
    "A matrix with columns",
    "A line in space"
  ],
  answer: 1,
  explanation: "A subspace must satisfy closure under vector addition and scalar multiplication."
},
{
  text: "What is $$\\text{Tr}(A^T A)$$ equivalent to?",
  choices: [
    "The determinant of $$A$$",
    "The squared Frobenius norm of $$A$$",
    "The eigenvalues of $$A$$",
    "The inverse of $$A$$"
  ],
  answer: 1,
  explanation: "By definition, $$\\|A\\|_F^2 = \\text{Tr}(A^T A)$$."
},
{
  text: "If $$Ax = 0$$ has nontrivial solutions, what does this imply?",
  choices: [
    "$$A$$ is invertible",
    "Columns of $$A$$ are linearly independent",
    "Null space of $$A$$ is nonzero",
    "$$\\det(A) \\ne 0$$"
  ],
  answer: 2,
  explanation: "Nontrivial solution ⇒ null space has dimension ≥ 1 ⇒ matrix is not full rank."
},
{
  text: "Which operation changes the determinant's sign but not its magnitude?",
  choices: [
    "Multiplying a row by a scalar",
    "Adding a multiple of one row to another",
    "Swapping two rows",
    "Transposing the matrix"
  ],
  answer: 2,
  explanation: "Swapping two rows flips the sign of the determinant."
},
{
  text: "Which matrix operation preserves symmetry?",
  choices: [
    "$$A^T A$$",
    "$$A^2$$ where $$A$$ is symmetric",
    "$$A + A^T$$",
    "All of the above"
  ],
  answer: 3,
  explanation: "All listed operations result in symmetric matrices if $$A$$ is real."
},{
  text: "Which of the following is **not** a linear transformation?",
  choices: [
    "$$T(x) = Ax$$",
    "$$T(x) = 3x + 2$$",
    "$$T(x) = x + y$$",
    "$$T(x) = Bx$$ where B is a matrix"
  ],
  answer: 1,
  explanation: "Linear transformations must satisfy $$T(0) = 0$$. Adding 2 violates this, so it's not linear."
},
{
  text: "Which condition guarantees that $$A^{-1}$$ exists for square matrix $$A$$?",
  choices: [
    "$$\\det(A) = 0$$",
    "Columns are linearly dependent",
    "$$A$$ is diagonal",
    "$$\\det(A) \\ne 0$$"
  ],
  answer: 3,
  explanation: "A matrix is invertible iff its determinant is nonzero."
},
{
  text: "Which transformation rotates vectors by $$90^\\circ$$ counterclockwise in $$\\mathbb{R}^2$$?",
  choices: [
    "$$\\begin{bmatrix}0 & -1 \\\\ 1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1 \\\\ -1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}2 & 0 \\\\ 0 & 2\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Standard rotation matrix for $$90^\\circ$$ CCW is $$\\begin{bmatrix}0 & -1 \\\\ 1 & 0\\end{bmatrix}$$."
},
{
  text: "The row space of a matrix is the same as the column space of:",
  choices: [
    "$$A$$",
    "$$A^{-1}$$",
    "$$A^T$$",
    "$$AA^T$$"
  ],
  answer: 2,
  explanation: "The row space of $$A$$ equals the column space of $$A^T$$."
},
{
  text: "A linear transformation maps every vector in $$\\mathbb{R}^n$$ to zero. What is its matrix representation?",
  choices: [
    "Diagonal matrix",
    "Identity matrix",
    "Zero matrix",
    "Projection matrix"
  ],
  answer: 2,
  explanation: "If all inputs go to 0, then the transformation is represented by the zero matrix."
},
{
  text: "Which of the following matrices is both **symmetric** and **orthogonal**?",
  choices: [
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & -1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1 \\\\ -1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1 \\\\ 1 & 0\\end{bmatrix}$$"
  ],
  answer: 2,
  explanation: "Identity matrix is symmetric and satisfies $$I^T I = I$$ → orthogonal."
},
{
  text: "Which of the following always holds for any matrix $$A$$?",
  choices: [
    "$$\\text{null}(A) \\cap \\text{col}(A) = \\{0\\}$$",
    "$$\\text{null}(A) = \\text{col}(A)$$",
    "$$\\text{rank}(A) = 0$$",
    "$$\\det(A) < 0$$"
  ],
  answer: 0,
  explanation: "The null space and column space intersect trivially at the zero vector only."
},
{
  text: "If $$P$$ is a projection matrix, what is true about $$P^2$$?",
  choices: [
    "$$P^2 = 0$$",
    "$$P^2 = I$$",
    "$$P^2 = P$$",
    "$$P^2 = -P$$"
  ],
  answer: 2,
  explanation: "Projection matrices are idempotent: $$P^2 = P$$."
},
{
  text: "Let $$A$$ be an $$n \\times n$$ orthogonal matrix. Then:",
  choices: [
    "$$A^T A = I$$",
    "$$A^T = A^{-1}$$",
    "$$\\det(A) = \\pm1$$",
    "All of the above"
  ],
  answer: 3,
  explanation: "All are true properties of orthogonal matrices."
},
{
  text: "Which operation does **not** change the rank of a matrix?",
  choices: [
    "Adding a row multiple to another row",
    "Swapping two rows",
    "Deleting a row",
    "Scaling a row to zero"
  ],
  answer: 0,
  explanation: "Elementary row operations that preserve rank include row addition and swapping, but not row deletion or zeroing."
},{
  text: "If a square matrix $$A$$ satisfies $$A^T = -A$$, then it is:",
  choices: [
    "Symmetric",
    "Skew-symmetric",
    "Diagonalizable",
    "Orthogonal"
  ],
  answer: 1,
  explanation: "Skew-symmetric matrices are defined by $$A^T = -A$$."
},
{
  text: "A homogeneous system $$Ax = 0$$ always has:",
  choices: [
    "A unique solution",
    "No solution",
    "Exactly two solutions",
    "At least the trivial solution"
  ],
  answer: 3,
  explanation: "The zero vector always solves $$Ax = 0$$ → trivial solution always exists."
},
{
  text: "An orthogonal matrix $$Q$$ preserves which of the following properties?",
  choices: [
    "Vector length",
    "Angles between vectors",
    "Determinant magnitude",
    "All of the above"
  ],
  answer: 3,
  explanation: "Orthogonal matrices preserve lengths, angles, and have $$\\det(Q) = \\pm1$$."
},
{
  text: "In the equation $$Ax = b$$, if $$\\text{rank}(A) < n$$, then:",
  choices: [
    "The system has no solution",
    "A unique solution exists",
    "Infinite solutions may exist",
    "Columns of $$A$$ are linearly independent"
  ],
  answer: 2,
  explanation: "If $$\\text{rank}(A) < n$$ and $$Ax = b$$ is consistent → infinite solutions exist."
},
{
  text: "What is the **image** of a linear transformation $$T: \\mathbb{R}^n \\to \\mathbb{R}^m$$?",
  choices: [
    "Null space of $$T$$",
    "Set of all input vectors",
    "Set of outputs $$T(x)$$",
    "Dimension of $$\\mathbb{R}^n$$"
  ],
  answer: 2,
  explanation: "Image or range of $$T$$ is the set of outputs $$\\{T(x) : x \\in \\mathbb{R}^n\\}$$."
},
{
  text: "What is the minimal number of vectors that span $$\\mathbb{R}^3$$?",
  choices: ["2", "3", "4", "Depends on vectors"],
  answer: 1,
  explanation: "A basis for $$\\mathbb{R}^3$$ requires 3 linearly independent vectors."
},
{
  text: "Which of the following implies that matrix $$A$$ is not invertible?",
  choices: [
    "$$\\det(A) = 5$$",
    "$$\\text{rank}(A) = n$$",
    "Columns are linearly dependent",
    "$$A = I_n$$"
  ],
  answer: 2,
  explanation: "Linear dependence among columns ⇒ $$A$$ is singular ⇒ not invertible."
},
{
  text: "If all rows of matrix $$A$$ are linearly dependent, then:",
  choices: [
    "$$\\text{rank}(A) = 0$$",
    "$$\\text{rank}(A) = 1$$",
    "$$\\det(A) = 1$$",
    "$$A$$ is diagonalizable"
  ],
  answer: 1,
  explanation: "Only one pivot row exists if others are dependent ⇒ rank = 1."
},
{
  text: "Which of the following matrices leaves vectors on $$x$$-axis unchanged but maps others to 0?",
  choices: [
    "$$\\begin{bmatrix}1 & 0\\\\0 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 1\\\\0 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Projects onto the x-axis: keeps $$x$$-component, zeroes $$y$$-component."
},
{
  text: "What must be true for vectors $$v_1, v_2, v_3$$ to span $$\\mathbb{R}^3$$?",
  choices: [
    "They are mutually orthogonal",
    "They are eigenvectors of the same matrix",
    "They are linearly independent",
    "They all lie in a plane"
  ],
  answer: 2,
  explanation: "Three linearly independent vectors in $$\\mathbb{R}^3$$ form a basis ⇒ they span the space."
},{
  text: "If a consistent system has **more variables than equations**, then it:",
  choices: [
    "Has a unique solution",
    "Cannot be solved",
    "Has infinitely many solutions",
    "Must be homogeneous"
  ],
  answer: 2,
  explanation: "More variables than equations ⇒ free variables present ⇒ infinitely many solutions (if consistent)."
},
{
  text: "Which of the following is **not necessarily** preserved under a linear transformation?",
  choices: [
    "Origin",
    "Parallelism",
    "Angle",
    "Addition"
  ],
  answer: 2,
  explanation: "Linear transformations preserve vector addition and scalar multiplication, but not necessarily angles."
},
{
  text: "For a matrix $$A$$, the trace $$\\text{Tr}(A)$$ equals the:",
  choices: [
    "Sum of all entries",
    "Sum of eigenvalues (with multiplicities)",
    "Determinant of $$A$$",
    "Rank of $$A$$"
  ],
  answer: 1,
  explanation: "The trace is equal to the sum of the diagonal elements, which equals the sum of eigenvalues (by characteristic polynomial)."
},
{
  text: "Let $$A$$ be a matrix and $$v$$ a nonzero vector such that $$Av = \\lambda v + b$$ where $$b \\ne 0$$. Then $$v$$ is:",
  choices: [
    "An eigenvector",
    "In the null space",
    "Not an eigenvector",
    "Orthogonal to $$b$$"
  ],
  answer: 2,
  explanation: "If $$Av \\ne \\lambda v$$, $$v$$ is not an eigenvector."
},
{
  text: "Let $$Q$$ be an orthogonal matrix. Then for any vector $$x$$, we have:",
  choices: [
    "$$\\|Qx\\| = \\|x\\|$$",
    "$$Qx = -x$$",
    "$$Qx = Q^T x$$",
    "$$Q^{-1} = Q$$"
  ],
  answer: 0,
  explanation: "Orthogonal matrices preserve vector norms ⇒ lengths stay the same."
},
{
  text: "Which is true about the **kernel** (null space) of a matrix $$A$$?",
  choices: [
    "Contains all solutions to $$Ax = b$$",
    "Is always trivial",
    "Is the solution set of $$Ax = 0$$",
    "Is equal to the column space"
  ],
  answer: 2,
  explanation: "The null space is defined as the set of all $$x$$ such that $$Ax = 0$$."
},
{
  text: "A matrix with eigenvalues $$\\lambda_1 = 1$$, $$\\lambda_2 = 1$$, $$\\lambda_3 = 1$$ is most likely:",
  choices: [
    "Nilpotent",
    "Identity or similar to it",
    "Skew-symmetric",
    "Singular"
  ],
  answer: 1,
  explanation: "All eigenvalues = 1 ⇒ likely diagonal or similar to identity matrix."
},
{
  text: "Which of the following statements about projection matrices is true?",
  choices: [
    "They always have full rank",
    "They are always diagonal",
    "They are idempotent and symmetric",
    "Their determinant is always 1"
  ],
  answer: 2,
  explanation: "Projection matrices satisfy $$P^2 = P$$ and $$P^T = P$$."
},
{
  text: "If $$A$$ is diagonalizable, then the sum of its eigenvalues equals:",
  choices: [
    "The trace of $$A$$",
    "The rank of $$A$$",
    "$$\\det(A)$$",
    "Always zero"
  ],
  answer: 0,
  explanation: "Diagonalization preserves eigenvalues. Their sum equals trace."
},
{
  text: "A matrix with all singular values $$< 1$$ is called a:",
  choices: [
    "Unitary matrix",
    "Contractive matrix",
    "Stochastic matrix",
    "Diagonal matrix"
  ],
  answer: 1,
  explanation: "If all singular values are less than 1, matrix shrinks all vectors ⇒ it's contractive."
},{
  text: "Which of the following matrices has **orthogonal eigenvectors**?",
  choices: [
    "Upper triangular matrix",
    "Any invertible matrix",
    "Symmetric matrix",
    "Nilpotent matrix"
  ],
  answer: 2,
  explanation: "Symmetric matrices over $$\\mathbb{R}$$ have real orthogonal eigenvectors by the Spectral Theorem."
},
{
  text: "If all eigenvalues of matrix $$A$$ are real and negative, then:",
  choices: [
    "$$A$$ is not invertible",
    "$$\\det(A) < 0$$ (if odd size)",
    "$$A$$ is skew-symmetric",
    "$$A$$ has no real eigenvectors"
  ],
  answer: 1,
  explanation: "The determinant is the product of eigenvalues. If all are negative and odd count ⇒ determinant is negative."
},
{
  text: "Let $$A$$ be $$n \\times n$$ and satisfy $$A^{-1} = A^T$$. Then $$A$$ is:",
  choices: [
    "Diagonal",
    "Orthogonal",
    "Singular",
    "Symmetric"
  ],
  answer: 1,
  explanation: "By definition, $$A^T = A^{-1}$$ ⇒ $$A$$ is orthogonal."
},
{
  text: "What is the only vector $$v$$ that satisfies $$Av = 0$$ for all square matrices $$A$$?",
  choices: [
    "The identity matrix",
    "Any basis vector",
    "The zero vector",
    "There is no such vector"
  ],
  answer: 2,
  explanation: "Only $$v = 0$$ maps to zero under any linear transformation $$A$$."
},
{
  text: "Let $$\\lambda$$ be an eigenvalue of matrix $$A$$ and $$x$$ its corresponding eigenvector. Then:",
  choices: [
    "$$Ax = 0$$",
    "$$Ax = \\lambda x$$",
    "$$Ax = x\\lambda^2$$",
    "$$x = \\lambda Ax$$"
  ],
  answer: 1,
  explanation: "By definition of eigenvectors: $$Ax = \\lambda x$$."
},
{
  text: "If matrix $$A$$ satisfies $$A^2 = I$$ and $$A \\ne I$$, then $$A$$ is:",
  choices: [
    "Idempotent",
    "Orthogonal but not identity",
    "Singular",
    "A projection matrix"
  ],
  answer: 1,
  explanation: "$$A^2 = I$$ and $$A \\ne I$$ ⇒ $$A = A^{-1}$$ ⇒ $$A$$ is orthogonal."
},
{
  text: "A matrix is invertible if and only if its null space contains:",
  choices: [
    "The zero vector only",
    "All basis vectors",
    "A pivot column",
    "Its trace is zero"
  ],
  answer: 0,
  explanation: "If $$\\text{null}(A) = \\{0\\}$$, then $$A$$ is invertible."
},
{
  text: "What is the trace of a rotation matrix in $$\\mathbb{R}^2$$ with angle $$\\theta$$?",
  choices: [
    "$$\\cos(\\theta)$$",
    "$$2\\cos(\\theta)$$",
    "$$\\sin(\\theta)$$",
    "$$\\theta$$"
  ],
  answer: 1,
  explanation: "Rotation matrix: $$\\begin{bmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{bmatrix}$$ ⇒ trace = $$2\\cos\\theta$$."
},
{
  text: "Which matrix is both **involutory** and **orthogonal**?",
  choices: [
    "$$A = A^{-1} = A^T$$",
    "$$A^2 = A$$",
    "$$A^2 = 0$$",
    "$$A = A^2$$"
  ],
  answer: 0,
  explanation: "Involutory means $$A^2 = I$$. Orthogonal means $$A^T = A^{-1}$$ ⇒ both satisfied by such $$A$$."
},
{
  text: "Which statement is always true for any matrix $$A$$?",
  choices: [
    "The rank of $$A$$ equals the number of columns",
    "The nullity of $$A$$ is non-zero",
    "The row space of $$A$$ is the orthogonal complement of its null space",
    "The column space of $$A$$ is orthogonal to the left null space"
  ],
  answer: 3,
  explanation: "In $$\\mathbb{R}^n$$, $$\\text{Col}(A) \\perp \\text{Null}(A^T)$$ ⇒ column space is orthogonal to the left null space."
},{
  text: "Let $$v$$ be a unit vector and $$P = vv^T$$. Then $$P$$ is:",
  choices: [
    "A rotation matrix",
    "An orthogonal matrix",
    "A projection matrix onto the line spanned by $$v$$",
    "The identity matrix"
  ],
  answer: 2,
  explanation: "For unit vector $$v$$, $$P = vv^T$$ projects any vector onto the span of $$v$$."
},
{
  text: "Which condition implies that a matrix is not diagonalizable?",
  choices: [
    "It has repeated eigenvalues without enough independent eigenvectors",
    "Its determinant is zero",
    "Its rank is full",
    "It is symmetric"
  ],
  answer: 0,
  explanation: "A matrix is not diagonalizable if geometric multiplicity < algebraic multiplicity."
},
{
  text: "If $$Ax = b$$ is inconsistent, what can we say about $$b$$?",
  choices: [
    "$$b$$ is in $$\\text{Col}(A)$$",
    "$$b$$ is in $$\\text{Null}(A)$$",
    "$$b$$ is not in $$\\text{Col}(A)$$",
    "A unique solution exists"
  ],
  answer: 2,
  explanation: "If $$Ax = b$$ is inconsistent, $$b$$ is outside the column space of $$A$$."
},
{
  text: "If eigenvectors corresponding to distinct eigenvalues are always orthogonal, then the matrix is:",
  choices: [
    "Diagonal",
    "Invertible",
    "Symmetric",
    "Lower triangular"
  ],
  answer: 2,
  explanation: "Symmetric matrices have orthogonal eigenvectors (by Spectral Theorem)."
},
{
  text: "The dimension of the left null space of an $$m \\times n$$ matrix is:",
  choices: [
    "$$m - \\text{rank}(A)$$",
    "$$n - \\text{rank}(A)$$",
    "$$\\text{rank}(A)$$",
    "$$0$$ if $$m = n$$"
  ],
  answer: 0,
  explanation: "Left null space is the null space of $$A^T$$ ⇒ dimension = $$m - \\text{rank}(A)$$."
},
{
  text: "Let $$A$$ be symmetric and $$v$$ and $$w$$ be two eigenvectors with different eigenvalues. Then:",
  choices: [
    "$$v$$ and $$w$$ are linearly dependent",
    "$$v^T w = 0$$",
    "$$Av = Aw$$",
    "$$A$$ is not diagonalizable"
  ],
  answer: 1,
  explanation: "Eigenvectors of symmetric matrix corresponding to distinct eigenvalues are orthogonal ⇒ $$v^T w = 0$$."
},
{
  text: "Which matrix is guaranteed to be positive semi-definite?",
  choices: [
    "$$A^T A$$ for any matrix $$A$$",
    "Any diagonal matrix",
    "Any projection matrix",
    "All skew-symmetric matrices"
  ],
  answer: 0,
  explanation: "$$A^T A$$ always yields a symmetric, positive semi-definite matrix."
},
{
  text: "Let $$\\lambda$$ be an eigenvalue of multiplicity 3 but with only 2 linearly independent eigenvectors. Then:",
  choices: [
    "$$A$$ is diagonalizable",
    "$$A$$ is not diagonalizable",
    "$$\\lambda$$ must be zero",
    "All eigenvalues are equal"
  ],
  answer: 1,
  explanation: "Lack of full set of eigenvectors ⇒ matrix not diagonalizable."
},
{
  text: "Which statement about a projection matrix $$P$$ is always true?",
  choices: [
    "$$\\det(P) = 1$$",
    "$$P^T = P$$ and $$P^2 = P$$",
    "$$P$$ is orthogonal",
    "$$\\text{Tr}(P) = 0$$"
  ],
  answer: 1,
  explanation: "Projection matrices are symmetric and idempotent: $$P^T = P$$ and $$P^2 = P$$."
},
{
  text: "If matrix $$A$$ has orthonormal eigenvectors, then it must be:",
  choices: [
    "Symmetric",
    "Diagonal",
    "Orthogonally diagonalizable",
    "All of the above"
  ],
  answer: 3,
  explanation: "All options are consistent with having orthonormal eigenvectors."
},{
  text: "If $$\\text{Null}(A) = \\{0\\}$$, then which is true?",
  choices: [
    "$$A$$ is invertible",
    "$$A$$ has linearly dependent columns",
    "$$Ax = 0$$ has nontrivial solutions",
    "$$\\det(A) = 0$$"
  ],
  answer: 0,
  explanation: "Null space trivial ⇒ columns are linearly independent ⇒ $$A$$ is invertible."
},
{
  text: "The matrix $$\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$$ reflects vectors across:",
  choices: [
    "$$x$$-axis",
    "$$y$$-axis",
    "the origin",
    "the line $$y = x$$"
  ],
  answer: 1,
  explanation: "It negates the $$y$$-component, so it reflects across the $$y$$-axis."
},
{
  text: "If $$A$$ is positive definite, then $$x^T A x$$ is:",
  choices: [
    "Zero for some $$x \\ne 0$$",
    "Always negative",
    "Always zero",
    "Always positive"
  ],
  answer: 3,
  explanation: "Definition of positive definite: $$x^T A x > 0$$ for all $$x \\ne 0$$."
},
{
  text: "Let $$A$$ be an orthogonal matrix. Then its columns:",
  choices: [
    "Have unit length and are orthogonal",
    "Are linearly dependent",
    "Add up to identity",
    "Are eigenvectors of $$A$$"
  ],
  answer: 0,
  explanation: "Orthonormal columns mean each column has length 1 and they’re mutually perpendicular."
},
{
  text: "Which matrix represents reflection about the line $$y = -x$$?",
  choices: [
    "$$\\begin{bmatrix} 0 & -1 \\\\ -1 & 0 \\end{bmatrix}$$",
    "$$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$$",
    "$$\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$$",
    "$$\\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "That matrix flips both coordinates and swaps them ⇒ reflection across $$y = -x$$."
},
{
  text: "Let $$A$$ be $$n \\times n$$. If $$A$$ is diagonalizable, then:",
  choices: [
    "$$A$$ is invertible",
    "There exists $$P$$ such that $$P^{-1}AP$$ is diagonal",
    "$$A$$ must be orthogonal",
    "All eigenvalues are zero"
  ],
  answer: 1,
  explanation: "Diagonalizability means there exists $$P$$ with linearly independent eigenvectors such that $$P^{-1}AP = D$$."
},
{
  text: "Let $$A$$ and $$B$$ be invertible. Then $$\\left(AB\\right)^{-1} =$$",
  choices: [
    "$$A^{-1}B^{-1}$$",
    "$$B^{-1}A^{-1}$$",
    "$$A^{-1} + B^{-1}$$",
    "$$A^T B^T$$"
  ],
  answer: 1,
  explanation: "$$(AB)^{-1} = B^{-1}A^{-1}$$ because matrix inverse reverses multiplication order."
},
{
  text: "Which of the following is a necessary and sufficient condition for orthogonality of matrix $$Q$$?",
  choices: [
    "$$Q Q^T = I$$",
    "$$Q^2 = I$$",
    "$$Q = Q^T$$",
    "$$\\det(Q) = 1$$"
  ],
  answer: 0,
  explanation: "By definition: a matrix $$Q$$ is orthogonal iff $$Q Q^T = I$$."
},
{
  text: "Which of the following transformations maps a circle to an ellipse?",
  choices: [
    "An orthogonal transformation",
    "A diagonal matrix with unequal entries",
    "The identity",
    "A skew-symmetric matrix"
  ],
  answer: 1,
  explanation: "Scaling axes differently distorts a circle into an ellipse."
},
{
  text: "Let $$T: \\mathbb{R}^2 \\to \\mathbb{R}^2$$ rotate all vectors by $$180^\\circ$$. What is its matrix?",
  choices: [
    "$$\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$$",
    "$$\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}$$",
    "$$\\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$$",
    "$$\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Rotating $$180^\\circ$$ flips both axes ⇒ multiply vector by $$-1$$ on each component."
},{
  text: "For a matrix $$A$$, if $$A^T = A$$ and $$x^T A x > 0$$ for all $$x \\ne 0$$, then $$A$$ is:",
  choices: [
    "Negative definite",
    "Orthogonal",
    "Positive definite",
    "Diagonalizable but singular"
  ],
  answer: 2,
  explanation: "Symmetric + $$x^T A x > 0$$ ⇒ positive definite matrix."
},
{
  text: "What is true about the determinant and trace of a matrix?",
  choices: [
    "They are always equal",
    "They are both the sum of eigenvalues",
    "Determinant = product of eigenvalues, trace = sum of eigenvalues",
    "Both only apply to symmetric matrices"
  ],
  answer: 2,
  explanation: "For any square matrix, trace = sum and determinant = product of eigenvalues."
},
{
  text: "Which matrix has linearly dependent columns?",
  choices: [
    "$$\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1&2\\\\2&4\\end{bmatrix}$$",
    "$$\\begin{bmatrix}3&0\\\\0&3\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$$"
  ],
  answer: 1,
  explanation: "Second column is twice the first ⇒ linear dependence."
},
{
  text: "Which condition ensures that $$Ax = 0$$ has only the trivial solution?",
  choices: [
    "$$\\text{rank}(A) < n$$",
    "$$\\det(A) = 0$$",
    "$$\\text{null}(A) \\ne \\{0\\}$$",
    "$$\\text{rank}(A) = n$$"
  ],
  answer: 3,
  explanation: "Full column rank ⇒ null space is trivial ⇒ only zero solution."
},
{
  text: "If $$A$$ is diagonalizable, then there exists invertible $$P$$ such that:",
  choices: [
    "$$A = P D P^{-1}$$",
    "$$A = P + D + P^{-1}$$",
    "$$D = A^{-1}$$",
    "$$P = D A$$"
  ],
  answer: 0,
  explanation: "By definition: diagonalizable ⇒ similar to diagonal matrix."
},
{
  text: "Which of the following is **not always** true for orthogonal matrices?",
  choices: [
    "$$Q^T Q = I$$",
    "$$Q^{-1} = Q^T$$",
    "$$\\det(Q) = 1$$",
    "Columns are orthonormal"
  ],
  answer: 2,
  explanation: "Orthogonal matrices have $$\\det(Q) = \\pm1$$, not always 1."
},
{
  text: "The null space of a matrix $$A$$ is orthogonal to:",
  choices: [
    "The row space of $$A$$",
    "The column space of $$A$$",
    "The left null space",
    "Itself"
  ],
  answer: 0,
  explanation: "Null space ⟂ row space ⇒ fundamental theorem of linear algebra."
},
{
  text: "A square matrix is singular if and only if:",
  choices: [
    "$$\\det(A) \\ne 0$$",
    "$$\\text{rank}(A) = n$$",
    "It has at least one zero eigenvalue",
    "All rows are linearly independent"
  ],
  answer: 2,
  explanation: "Zero eigenvalue ⇔ determinant is zero ⇔ matrix is singular."
},
{
  text: "Let $$v$$ be an eigenvector of $$A$$ with eigenvalue $$\\lambda$$. What is $$Av^2$$?",
  choices: [
    "$$A (v^2) = \\lambda^2 v$$",
    "$$A v^2 = \\lambda v^2$$",
    "Not defined (need matrix product)",
    "$$v^2 = Av$$"
  ],
  answer: 2,
  explanation: "Matrix-vector multiplication not defined for componentwise square → must clarify notation."
},
{
  text: "Which of the following matrices is both symmetric and has zero determinant?",
  choices: [
    "$$\\begin{bmatrix}1 & 1\\\\1 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}2 & -1\\\\-1 & 2\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Matrix is symmetric and its rows are linearly dependent ⇒ determinant = 0."
},{
  text: "Let $$A$$ be a square matrix and $$v \\ne 0$$ such that $$Av = 2v$$ and $$A^2v = 4v$$. Then:",
  choices: [
    "$$v$$ is an eigenvector of $$A$$ with eigenvalue 2",
    "$$v$$ is an eigenvector of $$A$$ with eigenvalue 4",
    "$$v$$ is not an eigenvector",
    "$$Av = 0$$"
  ],
  answer: 0,
  explanation: "From $$Av = 2v$$ ⇒ $$v$$ is an eigenvector with eigenvalue 2. Then $$A^2v = A(2v) = 2Av = 4v$$ is consistent."
},
{
  text: "Which transformation projects any vector onto the $$y$$-axis in $$\\mathbb{R}^2$$?",
  choices: [
    "$$\\begin{bmatrix}0 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0\\\\0 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Projection onto the $$y$$-axis eliminates the $$x$$-component ⇒ $$\\begin{bmatrix}0 & 0\\\\0 & 1\\end{bmatrix}$$."
},
{
  text: "If $$A$$ is a square matrix with $$\\det(A) = -5$$, what is $$\\det(A^T)$$?",
  choices: [
    "$$-5$$",
    "$$5$$",
    "$$0$$",
    "$$\\text{undefined}$$"
  ],
  answer: 0,
  explanation: "The determinant of $$A^T$$ equals the determinant of $$A$$ ⇒ $$\\det(A^T) = -5$$."
},
{
  text: "What is the rank of the identity matrix $$I_n$$?",
  choices: ["0", "$$n$$", "$$n-1$$", "Depends on the entries"],
  answer: 1,
  explanation: "All rows and columns are linearly independent ⇒ rank is $$n$$."
},
{
  text: "If two vectors are orthogonal, their dot product is:",
  choices: [
    "$$1$$",
    "$$-1$$",
    "$$0$$",
    "$$\\infty$$"
  ],
  answer: 2,
  explanation: "Orthogonal vectors are perpendicular ⇒ dot product is zero."
},
{
  text: "Which of the following matrices **preserves angles but not lengths**?",
  choices: [
    "Rotation matrix",
    "Orthogonal matrix",
    "Scaling matrix with constant factor",
    "Matrix with orthonormal columns but scaled"
  ],
  answer: 3,
  explanation: "Multiplying by a scalar preserves angles (same direction), but not lengths ⇒ norm changes."
},
{
  text: "A system $$Ax = b$$ has a solution if and only if:",
  choices: [
    "$$b \\in \\text{Null}(A)$$",
    "$$b$$ is orthogonal to $$A$$",
    "$$b \\in \\text{Col}(A)$$",
    "The matrix $$A$$ is invertible"
  ],
  answer: 2,
  explanation: "For $$Ax = b$$ to be solvable, $$b$$ must lie in the column space of $$A$$."
},
{
  text: "If $$x$$ is in the null space of $$A$$, then $$x^T A =$$",
  choices: [
    "Zero vector",
    "Identity matrix",
    "Nonzero vector",
    "Undefined"
  ],
  answer: 0,
  explanation: "If $$Ax = 0$$, then $$x^T A = 0^T = 0$$ as well."
},
{
  text: "Let $$T: \\mathbb{R}^2 \\to \\mathbb{R}^2$$ scale all vectors by 3. Then the matrix of $$T$$ is:",
  choices: [
    "$$\\begin{bmatrix}3 & 0\\\\0 & 3\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 3\\\\3 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 3\\\\3 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0\\\\0 & 1\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Scaling matrix multiplies each component by 3 ⇒ diagonal matrix with 3s."
},
{
  text: "Which of the following statements about symmetric matrices is **always true**?",
  choices: [
    "They have complex eigenvalues",
    "They are not diagonalizable",
    "They have real eigenvalues",
    "They are nilpotent"
  ],
  answer: 2,
  explanation: "Real symmetric matrices always have real eigenvalues."
},{
  text: "If matrix $$A$$ is symmetric and all its eigenvalues are positive, then it is:",
  choices: [
    "Diagonal only",
    "Positive definite",
    "Orthogonal",
    "Skew-symmetric"
  ],
  answer: 1,
  explanation: "Symmetric + positive eigenvalues ⇒ matrix is positive definite by definition."
},
{
  text: "Which matrix swaps the coordinates $$x$$ and $$y$$ in $$\\mathbb{R}^2$$?",
  choices: [
    "$$\\begin{bmatrix}1 & 0\\\\0 & -1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}-1 & 0\\\\0 & -1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 1\\\\0 & 1\\end{bmatrix}$$"
  ],
  answer: 1,
  explanation: "Swapping coordinates ⇒ apply $$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$."
},
{
  text: "If a transformation $$T$$ maps every vector to the origin, then $$T$$ is:",
  choices: [
    "Invertible",
    "Nonlinear",
    "The zero transformation",
    "The identity transformation"
  ],
  answer: 2,
  explanation: "$$T(v) = 0$$ for all $$v$$ ⇒ it's the zero map, not invertible."
},
{
  text: "Which of the following is a sufficient condition for a square matrix $$A$$ to be invertible?",
  choices: [
    "$$\\det(A) = 0$$",
    "Columns are linearly dependent",
    "$$\\text{rank}(A) = n$$",
    "$$A$$ is symmetric"
  ],
  answer: 2,
  explanation: "Full rank ⇒ independent columns ⇒ invertible."
},
{
  text: "The rank of a $$4 \\times 4$$ diagonal matrix with exactly two non-zero diagonal entries is:",
  choices: ["0", "2", "3", "4"],
  answer: 1,
  explanation: "Only nonzero diagonals contribute to pivots ⇒ rank = 2."
},
{
  text: "Let $$A$$ be a rotation matrix in $$\\mathbb{R}^2$$. Then its determinant is:",
  choices: [
    "Always 0",
    "Always 1",
    "$$\\cos^2(\\theta) - \\sin^2(\\theta)$$",
    "Depends on angle"
  ],
  answer: 1,
  explanation: "Determinant of a rotation matrix is always 1 (preserves area and orientation)."
},
{
  text: "Which condition ensures $$AA^{-1} = I$$?",
  choices: [
    "$$\\text{Null}(A) \\ne \\{0\\}$$",
    "$$A$$ is singular",
    "$$A$$ has full rank",
    "$$\\det(A) = 0$$"
  ],
  answer: 2,
  explanation: "Invertibility ⇔ full rank ⇔ unique inverse."
},
{
  text: "Which operation does **not** affect the determinant of a square matrix?",
  choices: [
    "Swapping two rows",
    "Multiplying a row by 2",
    "Adding one row to another",
    "Replacing a row with zeros"
  ],
  answer: 2,
  explanation: "Adding a multiple of one row to another does not change determinant."
},
{
  text: "If $$x$$ lies in the null space of $$A$$ and $$A^2$$ exists, then:",
  choices: [
    "$$x$$ lies in the column space of $$A$$",
    "$$Ax = x$$",
    "$$A^2x = 0$$",
    "$$x$$ is orthogonal to $$A$$"
  ],
  answer: 2,
  explanation: "If $$Ax = 0$$, then $$A^2x = A(Ax) = A(0) = 0$$."
},
{
  text: "What is the trace of a $$2 \\times 2$$ rotation matrix with angle $$\\theta$$?",
  choices: [
    "$$\\cos(\\theta)$$",
    "$$2\\cos(\\theta)$$",
    "$$\\sin(\\theta)$$",
    "$$0$$"
  ],
  answer: 1,
  explanation: "Rotation matrix: trace = $$2\\cos(\\theta)$$."
},{
  text: "If $$A$$ is a real symmetric matrix, which of the following is always true?",
  choices: [
    "It has only complex eigenvalues",
    "It is not diagonalizable",
    "It has an orthonormal basis of eigenvectors",
    "It must be invertible"
  ],
  answer: 2,
  explanation: "Real symmetric matrices are always orthogonally diagonalizable (Spectral Theorem)."
},
{
  text: "The dimension of the null space of $$A$$ plus the rank of $$A$$ equals:",
  choices: [
    "$$\\text{number of rows of } A$$",
    "$$\\text{number of columns of } A$$",
    "$$\\det(A)$$",
    "$$0$$"
  ],
  answer: 1,
  explanation: "Rank–nullity theorem: $$\\text{nullity}(A) + \\text{rank}(A) = \\text{number of columns}$$."
},
{
  text: "Which of the following is a necessary condition for $$A^{-1}$$ to exist?",
  choices: [
    "$$A$$ is symmetric",
    "$$\\text{rank}(A) = n$$",
    "$$A$$ has real eigenvalues",
    "$$A$$ is diagonalizable"
  ],
  answer: 1,
  explanation: "A matrix is invertible if and only if it has full rank ⇒ $$\\text{rank}(A) = n$$."
},
{
  text: "Which vector lies in the kernel (null space) of matrix $$A$$ if $$Ax = 0$$?",
  choices: [
    "Any solution to $$Ax = b$$",
    "Any solution to $$Ax = 0$$",
    "Any column of $$A$$",
    "Any row of $$A$$"
  ],
  answer: 1,
  explanation: "By definition, the null space contains all vectors $$x$$ such that $$Ax = 0$$."
},
{
  text: "The product of two invertible matrices is:",
  choices: [
    "Always invertible",
    "Always symmetric",
    "Always diagonal",
    "Always orthogonal"
  ],
  answer: 0,
  explanation: "If $$A$$ and $$B$$ are invertible ⇒ $$AB$$ is invertible and $$(AB)^{-1} = B^{-1}A^{-1}$$."
},
{
  text: "Which matrix reflects a vector across the $$x$$-axis in $$\\mathbb{R}^2$$?",
  choices: [
    "$$\\begin{bmatrix}1 & 0\\\\0 & -1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}-1 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & -1\\\\-1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "This negates the $$y$$-component while leaving $$x$$ unchanged ⇒ reflection about $$x$$-axis."
},
{
  text: "If $$Q$$ is orthogonal, then $$Q^T Q =$$",
  choices: [
    "$$Q$$",
    "$$Q^{-1}$$",
    "$$0$$",
    "$$I$$"
  ],
  answer: 3,
  explanation: "Orthogonal matrices satisfy $$Q^T Q = I$$ by definition."
},
{
  text: "Which property is preserved under any orthogonal transformation?",
  choices: [
    "Vector length and angle",
    "Trace and determinant",
    "Eigenvalues",
    "Matrix symmetry"
  ],
  answer: 0,
  explanation: "Orthogonal transformations preserve inner products, thus preserving lengths and angles."
},
{
  text: "If the columns of $$A$$ are linearly independent, then the null space of $$A$$ contains:",
  choices: [
    "All unit vectors",
    "Only the zero vector",
    "At least one nonzero vector",
    "The identity matrix"
  ],
  answer: 1,
  explanation: "Linearly independent columns ⇒ null space is trivial ⇒ $$\\{0\\}$$ only."
},
{
  text: "Which of the following is an eigenvector of the identity matrix $$I$$?",
  choices: [
    "Only the zero vector",
    "Any nonzero vector",
    "Only standard basis vectors",
    "None of the above"
  ],
  answer: 1,
  explanation: "$$Iv = v$$ ⇒ any vector is an eigenvector with eigenvalue 1."
}, {
  text: "Which elementary row operation does **not** change the determinant of a matrix?",
  choices: [
    "Swapping two rows",
    "Multiplying a row by a scalar",
    "Adding a multiple of one row to another",
    "Scaling all rows"
  ],
  answer: 2,
  explanation: "Only adding a multiple of one row to another preserves the determinant."
},
{
  text: "If the columns of matrix $$A$$ span $$\\mathbb{R}^n$$, then which is true?",
  choices: [
    "$$A$$ is not invertible",
    "$$\\text{rank}(A) = n$$",
    "The null space of $$A$$ is nontrivial",
    "All solutions to $$Ax = b$$ are unique"
  ],
  answer: 1,
  explanation: "Spanning $$\\mathbb{R}^n$$ implies full column rank ⇒ $$\\text{rank}(A) = n$$."
},
{
  text: "A linear system with **no solution** is said to be:",
  choices: [
    "Trivial",
    "Homogeneous",
    "Inconsistent",
    "Overdetermined"
  ],
  answer: 2,
  explanation: "A system with no solutions is inconsistent, regardless of the number of equations."
},
{
  text: "If a linear transformation reflects across the $$y$$-axis, which matrix represents it?",
  choices: [
    "$$\\begin{bmatrix}-1 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0\\\\0 & -1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 1\\\\0 & 1\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Reflection across the $$y$$-axis negates the $$x$$-component only."
},
{
  text: "A transformation that scales all vectors by a constant is called:",
  choices: [
    "Projection",
    "Translation",
    "Dilation",
    "Rotation"
  ],
  answer: 2,
  explanation: "Dilation refers to uniform scaling of vectors in all directions."
},
{
  text: "Which matrix has **trace = 0** but is not the zero matrix?",
  choices: [
    "$$\\begin{bmatrix}1 & 2\\\\3 & -1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1\\\\-1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 0\\\\0 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}2 & 3\\\\4 & 5\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Trace is 1 + (–1) = 0, and the matrix is clearly nonzero."
},
{
  text: "If $$A$$ is a $$3 \\times 3$$ matrix with determinant zero, then:",
  choices: [
    "$$A$$ is invertible",
    "Columns of $$A$$ are linearly independent",
    "Null space of $$A$$ is trivial",
    "$$A$$ is singular"
  ],
  answer: 3,
  explanation: "$$\\det(A) = 0$$ ⇒ matrix is singular and not invertible."
},
{
  text: "Which matrix transformation leaves the $$y$$-component unchanged and zeros out the $$x$$?",
  choices: [
    "$$\\begin{bmatrix}0 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0\\\\0 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}-1 & 0\\\\0 & 1\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "This matrix removes $$x$$-component and keeps $$y$$ unchanged."
},
{
  text: "Two matrices are **row equivalent** if:",
  choices: [
    "Their determinants are equal",
    "They have the same row space",
    "They have the same eigenvalues",
    "They have the same diagonal"
  ],
  answer: 1,
  explanation: "Row equivalence implies equal row spaces (after Gaussian elimination)."
},
{
  text: "Which statement about matrix multiplication is **always true**?",
  choices: [
    "$$AB = BA$$",
    "$$AB$$ is defined if columns of $$A$$ = columns of $$B$$",
    "$$AB$$ has dimension $$m \\times p$$ if $$A$$ is $$m \\times n$$ and $$B$$ is $$n \\times p$$",
    "$$\\det(AB) = \\det(A) + \\det(B)$$"
  ],
  answer: 2,
  explanation: "Matrix product $$AB$$ is defined when inner dimensions agree ⇒ result is $$m \\times p$$."
},{
  text: "A matrix $$A$$ is **positive semi-definite** if and only if:",
  choices: [
    "$$A = A^{-1}$$",
    "$$x^T A x \\ge 0$$ for all $$x \\ne 0$$",
    "$$\\text{Tr}(A) = 0$$",
    "$$A$$ has negative eigenvalues only"
  ],
  answer: 1,
  explanation: "Definition of positive semi-definite ⇒ $$x^T A x \\ge 0$$ for all nonzero $$x$$."
},
{
  text: "If a linear transformation rotates all vectors by 90°, its matrix has determinant:",
  choices: [
    "1",
    "0",
    "-1",
    "Depends on angle"
  ],
  answer: 0,
  explanation: "All proper rotation matrices in $$\\mathbb{R}^2$$ have determinant 1."
},
{
  text: "Let $$A$$ be $$2 \\times 2$$ with eigenvalues $$\\lambda_1 = 3$$ and $$\\lambda_2 = -1$$. Then:",
  choices: [
    "$$\\text{Tr}(A) = 2, \\det(A) = -3$$",
    "$$\\text{Tr}(A) = -4, \\det(A) = -3$$",
    "$$\\text{Tr}(A) = 4, \\det(A) = 3$$",
    "$$\\text{Tr}(A) = 2, \\det(A) = 3$$"
  ],
  answer: 0,
  explanation: "Trace = sum = $$3 + (-1) = 2$$, determinant = product = $$3 * -1 = -3$$."
},
{
  text: "Which of the following always produces a **symmetric matrix**?",
  choices: [
    "$$AA^T$$",
    "$$A + A^T$$",
    "$$A^T A$$",
    "All of the above"
  ],
  answer: 3,
  explanation: "All of these are guaranteed to be symmetric, regardless of $$A$$."
},
{
  text: "A **projection matrix** satisfies $$P^2 = P$$. What does this imply geometrically?",
  choices: [
    "Every vector maps to origin",
    "A vector projected once or twice yields same result",
    "It rotates vectors",
    "It is non-linear"
  ],
  answer: 1,
  explanation: "Projections 'stick' after first application ⇒ $$P^2 = P$$."
},
{
  text: "Which transformation matrix scales vectors by 2 along the $$x$$-axis only?",
  choices: [
    "$$\\begin{bmatrix}2 & 0 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & 2\\end{bmatrix}$$",
    "$$\\begin{bmatrix}2 & 2 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}2 & 0 \\\\ 1 & 1\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Only $$x$$-component gets scaled ⇒ diagonal with 2 and 1."
},
{
  text: "The matrix $$A = \\begin{bmatrix}1 & 2 \\\\ 0 & 1\\end{bmatrix}$$ is:",
  choices: [
    "Symmetric",
    "Diagonalizable",
    "Upper triangular with repeated eigenvalues",
    "Projection matrix"
  ],
  answer: 2,
  explanation: "It's upper triangular, eigenvalue 1 with algebraic multiplicity 2."
},
{
  text: "Let $$A$$ be invertible and $$B = A^{-1}$$. Then $$BA =$$",
  choices: [
    "$$0$$",
    "$$I$$",
    "$$B^T$$",
    "$$AB$$"
  ],
  answer: 1,
  explanation: "By inverse definition ⇒ $$AB = BA = I$$."
},
{
  text: "Which of the following matrices is **not invertible**?",
  choices: [
    "$$\\begin{bmatrix}1 & 2 \\\\ 2 & 4\\end{bmatrix}$$",
    "$$\\begin{bmatrix}3 & 0 \\\\ 0 & 5\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0 \\\\ 0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}-1 & 1 \\\\ 1 & 1\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Rows are linearly dependent ⇒ determinant = 0 ⇒ singular matrix."
},
{
  text: "What is the **rank** of the zero matrix of any size?",
  choices: [
    "Equal to number of rows",
    "Equal to number of columns",
    "Zero",
    "One"
  ],
  answer: 2,
  explanation: "It has no pivots ⇒ rank = 0."
},{
  text: "If $$A$$ is a square matrix and $$A^{-1}$$ exists, what can be said about $$\\det(A)$$?",
  choices: [
    "$$\\det(A) = 0$$",
    "$$\\det(A) \\ne 0$$",
    "$$\\det(A) < 0$$",
    "$$\\det(A) = 1$$"
  ],
  answer: 1,
  explanation: "A matrix is invertible if and only if its determinant is nonzero."
},
{
  text: "Which matrix **projects** vectors onto the x-axis?",
  choices: [
    "$$\\begin{bmatrix}1 & 0\\\\0 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & 1\\\\1 & 0\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "This matrix sets the y-component to zero while keeping the x-component unchanged."
},
{
  text: "Let $$Q$$ be an orthogonal matrix. Then which is **not necessarily** true?",
  choices: [
    "$$Q^T = Q^{-1}$$",
    "$$\\det(Q) = \\pm1$$",
    "All eigenvalues of $$Q$$ are real",
    "$$Q Q^T = I$$"
  ],
  answer: 2,
  explanation: "Orthogonal matrices can have complex eigenvalues (e.g. rotations), even though they preserve length and angle."
},
{
  text: "If the trace of a matrix $$A$$ is 0, then:",
  choices: [
    "$$A$$ is the zero matrix",
    "$$A$$ is singular",
    "The sum of its eigenvalues is zero",
    "$$A$$ is diagonal"
  ],
  answer: 2,
  explanation: "The trace equals the sum of eigenvalues (with multiplicities)."
},
{
  text: "Which of the following is a **valid** linear transformation?",
  choices: [
    "$$T(x) = Ax + b$$ with $$b \\ne 0$$",
    "$$T(x) = A x$$",
    "$$T(x) = \\|x\\|$$",
    "$$T(x) = x^2$$"
  ],
  answer: 1,
  explanation: "Only $$T(x) = Ax$$ satisfies both linearity conditions: homogeneity and additivity."
},
{
  text: "What is the **volume scaling factor** of a transformation given by matrix $$A$$ in $$\\mathbb{R}^3$$?",
  choices: [
    "$$\\text{Tr}(A)$$",
    "$$\\det(A)$$",
    "$$\\|A\\|_F$$",
    "$$\\text{rank}(A)$$"
  ],
  answer: 1,
  explanation: "The absolute value of the determinant gives the volume scaling factor under linear transformation."
},
{
  text: "If $$A$$ is symmetric and $$B = P^{-1}AP$$ is diagonal, what can be said about $$P$$?",
  choices: [
    "It is always orthogonal",
    "It contains eigenvectors of $$A$$",
    "$$P$$ is the inverse of $$A$$",
    "It equals $$A^T$$"
  ],
  answer: 1,
  explanation: "The matrix $$P$$ consists of eigenvectors of $$A$$ when it diagonalizes $$A$$."
},
{
  text: "Which type of matrix represents a **shear** transformation?",
  choices: [
    "$$\\begin{bmatrix}1 & k\\\\0 & 1\\end{bmatrix}$$",
    "$$\\begin{bmatrix}k & 0\\\\0 & k\\end{bmatrix}$$",
    "$$\\begin{bmatrix}0 & -1\\\\1 & 0\\end{bmatrix}$$",
    "$$\\begin{bmatrix}1 & 0\\\\0 & -1\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "Shear shifts one axis proportionally to another without changing volume uniformly."
},
{
  text: "Which of the following transformations has no effect on a vector’s **direction**?",
  choices: [
    "Scaling by a negative number",
    "Rotation by 90°",
    "Multiplying by identity matrix",
    "Shear transformation"
  ],
  answer: 2,
  explanation: "Only the identity transformation preserves both direction and magnitude exactly."
},
{
  text: "Let $$T$$ be a linear transformation such that $$T(x) = 0$$ for all $$x$$. Then the matrix of $$T$$ is:",
  choices: [
    "Identity matrix",
    "Zero matrix",
    "Singular but nonzero",
    "Projection matrix"
  ],
  answer: 1,
  explanation: "If all outputs are zero, then the transformation is represented by the zero matrix."
},{
  text: "What is the general form of a first-order linear time-invariant (LTI) differential equation?",
  choices: [
    "$$\\dot{x} = Ax$$",
    "$$y = Ax + Bu$$",
    "$$x(t) = A^t x_0$$",
    "$$\\dot{x} = f(x, u, t)$$"
  ],
  answer: 0,
  explanation: "The general state-space form of a first-order LTI system is $$\\dot{x} = Ax$$ where $$A$$ is a constant matrix."
},
{
  text: "Which of the following matrices leads to **marginal stability** in a linear system?",
  choices: [
    "$$A = \\begin{bmatrix}0 & 1\\\\-1 & 0\\end{bmatrix}$$",
    "$$A = \\begin{bmatrix}-2 & 0\\\\0 & -2\\end{bmatrix}$$",
    "$$A = \\begin{bmatrix}1 & 0\\\\0 & -1\\end{bmatrix}$$",
    "$$A = \\begin{bmatrix}2 & 0\\\\0 & 2\\end{bmatrix}$$"
  ],
  answer: 0,
  explanation: "This is a rotation matrix with purely imaginary eigenvalues ⇒ marginally stable."
},
{
  text: "In state-space representation, what does the matrix $$B$$ represent?",
  choices: [
    "Output matrix",
    "Control input matrix",
    "System dynamics",
    "Initial state"
  ],
  answer: 1,
  explanation: "In $$\\dot{x} = Ax + Bu$$, $$B$$ maps inputs $$u$$ to state influence."
},
{
  text: "What is the stability criterion for continuous-time LTI systems?",
  choices: [
    "All eigenvalues of $$A$$ have positive real parts",
    "All eigenvalues of $$A$$ have negative real parts",
    "All eigenvalues are imaginary",
    "All singular values are less than one"
  ],
  answer: 1,
  explanation: "Continuous-time LTI systems are asymptotically stable if all eigenvalues of $$A$$ lie in the left-half complex plane."
},
{
  text: "What is the solution to $$\\dot{x} = Ax$$ with initial condition $$x(0) = x_0$$?",
  choices: [
    "$$x(t) = Atx_0$$",
    "$$x(t) = x_0 e^{At}$$",
    "$$x(t) = e^{At} x_0$$",
    "$$x(t) = A^t x_0$$"
  ],
  answer: 2,
  explanation: "The solution is given by the matrix exponential: $$x(t) = e^{At} x_0$$."
},
{
  text: "Which property of $$A$$ ensures global asymptotic stability?",
  choices: [
    "$$A$$ is symmetric",
    "$$A$$ is invertible",
    "$$A$$ is Hurwitz",
    "$$A$$ is orthogonal"
  ],
  answer: 2,
  explanation: "A Hurwitz matrix has all eigenvalues with strictly negative real parts ⇒ stable."
},
{
  text: "Discrete-time LTI system is stable if:",
  choices: [
    "Eigenvalues of $$A$$ lie inside the unit circle",
    "Eigenvalues are positive",
    "$$\\det(A) > 0$$",
    "$$A$$ is nilpotent"
  ],
  answer: 0,
  explanation: "For discrete-time systems: stability ⇔ all eigenvalues of $$A$$ lie strictly inside the unit circle."
},
{
  text: "Which of the following can describe a nonlinear dynamic system?",
  choices: [
    "$$\\dot{x} = Ax$$",
    "$$x_{k+1} = Ax_k + Bu_k$$",
    "$$\\dot{x} = x^2 + \\sin(x) + u$$",
    "$$y = Cx$$"
  ],
  answer: 2,
  explanation: "Presence of nonlinear terms like $$x^2$$ or $$\\sin(x)$$ ⇒ nonlinear dynamics."
},
{
  text: "Lyapunov function $$V(x)$$ is used to:",
  choices: [
    "Control system input",
    "Compute matrix exponentials",
    "Evaluate stability of equilibrium",
    "Measure frequency response"
  ],
  answer: 2,
  explanation: "Lyapunov's direct method uses $$V(x)$$ to assess stability."
},
{
  text: "Which of these represents a forced response in state-space systems?",
  choices: [
    "$$e^{At}x_0$$",
    "$$\\int_0^t e^{A(t-\\tau)}Bu(\\tau) d\\tau$$",
    "$$Ax$$",
    "$$Cx + Du$$"
  ],
  answer: 1,
  explanation: "The forced (or particular) response depends on input $$u$$: given by convolution integral."
},{
  text: "In continuous-time systems, what does it mean if an equilibrium point is locally stable?",
  choices: [
    "All trajectories diverge from it",
    "Small perturbations decay over time",
    "The system has no input",
    "Eigenvalues are zero"
  ],
  answer: 1,
  explanation: "Local stability implies that small deviations from equilibrium tend to diminish with time."
},
{
  text: "What is the Jacobian used for in dynamic systems?",
  choices: [
    "Computing state response",
    "Linearizing nonlinear systems around an equilibrium point",
    "Determining observability",
    "Calculating step response"
  ],
  answer: 1,
  explanation: "The Jacobian matrix approximates the system's linear behavior near equilibrium."
},
{
  text: "Which of the following systems is **globally asymptotically stable**?",
  choices: [
    "$$\\dot{x} = -x^3$$",
    "$$\\dot{x} = x$$",
    "$$\\dot{x} = \\sin(x)$$",
    "$$\\dot{x} = 0$$"
  ],
  answer: 0,
  explanation: "The nonlinearity $$-x^3$$ ensures global asymptotic convergence to 0."
},
{
  text: "The Laplace transform is used to:",
  choices: [
    "Transform a discrete-time system into a continuous system",
    "Convert time-domain models to frequency-domain models",
    "Create nonlinear approximations",
    "Compute matrix exponentials"
  ],
  answer: 1,
  explanation: "Laplace transforms allow analyzing system behavior in the frequency domain."
},
{
  text: "What is the role of the input $$u(t)$$ in $$\\dot{x} = Ax + Bu$$?",
  choices: [
    "It determines system order",
    "It controls system output only",
    "It affects the evolution of state $$x(t)$$",
    "It determines matrix $$A$$"
  ],
  answer: 2,
  explanation: "Input $$u(t)$$ drives the system and directly affects how the state evolves."
},
{
  text: "For nonlinear systems, which method is typically used to assess local stability?",
  choices: [
    "Transform into frequency domain",
    "Lyapunov’s Direct Method",
    "Using matrix exponential",
    "Check BIBO stability"
  ],
  answer: 1,
  explanation: "Lyapunov functions help test whether small perturbations decay near equilibrium."
},
{
  text: "If a system has poles in the **right-half complex plane**, it is:",
  choices: [
    "Stable",
    "Marginally stable",
    "Unstable",
    "Undetermined"
  ],
  answer: 2,
  explanation: "Poles with positive real parts ⇒ system grows exponentially ⇒ unstable."
},
{
  text: "The phase portrait of $$\\dot{x} = Ax$$ describes:",
  choices: [
    "Control gain values",
    "Time constants only",
    "Evolution of state trajectories in space",
    "Step response of the output"
  ],
  answer: 2,
  explanation: "Phase portraits graphically depict the vector field and system behavior over time."
},
{
  text: "If $$x(t)$$ approaches a constant as $$t → ∞$$, the system is:",
  choices: [
    "Unbounded",
    "Divergent",
    "Stable",
    "Marginally stable"
  ],
  answer: 2,
  explanation: "If $$x(t)$$ settles ⇒ system is stable (convergent or asymptotically stable)."
},
{
  text: "Which statement is true about discrete-time linear systems $$x_{k+1} = Ax_k$$?",
  choices: [
    "If all eigenvalues of $$A$$ have modulus < 1, system is stable",
    "Stability only depends on $$\\det(A)$$",
    "All systems are stable for $$|\\lambda| > 1$$",
    "$$A$$ must be diagonal to assess stability"
  ],
  answer: 0,
  explanation: "For discrete-time systems, eigenvalues inside unit circle ⇒ stability."
},{
  text: "What is the transfer function $$G(s)$$ for the system $$\\dot{x} = Ax + Bu, \\ y = Cx$$?",
  choices: [
    "$$G(s) = sI - A$$",
    "$$G(s) = (sI - A)^{-1}B$$",
    "$$G(s) = C(sI - A)^{-1}B$$",
    "$$G(s) = C A B$$"
  ],
  answer: 2,
  explanation: "The transfer function from input to output is $$G(s) = C(sI - A)^{-1}B$$."
},
{
  text: "If all eigenvalues of $$A$$ have real parts = 0 and are **simple**, the system is:",
  choices: [
    "Asymptotically stable",
    "Unstable",
    "Marginally stable",
    "Oscillatory and divergent"
  ],
  answer: 2,
  explanation: "Eigenvalues on imaginary axis but simple ⇒ system is marginally stable."
},
{
  text: "Which condition causes an LTI system to be **unstable**?",
  choices: [
    "All eigenvalues with negative real parts",
    "One or more eigenvalues with positive real parts",
    "Zero eigenvalues only",
    "Determinant of $$A$$ is nonzero"
  ],
  answer: 1,
  explanation: "Positive real parts ⇒ exponential growth ⇒ instability."
},
{
  text: "The matrix exponential $$e^{At}$$ is used to:",
  choices: [
    "Solve $$x' = Ax$$",
    "Linearize nonlinear systems",
    "Test observability",
    "Calculate determinant"
  ],
  answer: 0,
  explanation: "The solution to $$\\dot{x} = Ax$$ is $$x(t) = e^{At}x_0$$."
},
{
  text: "Which of the following implies a system is time-invariant?",
  choices: [
    "System’s parameters vary with time",
    "System’s behavior shifts identically when time is shifted",
    "Matrix $$A$$ is nonlinear",
    "$$B$$ depends on input"
  ],
  answer: 1,
  explanation: "Time-invariance means that shifting input by $$t_0$$ shifts output by $$t_0$$ identically."
},
{
  text: "What’s the purpose of phase plane analysis?",
  choices: [
    "Compute eigenvalues of $$A$$",
    "Visualize trajectories of 2D systems",
    "Transform to frequency domain",
    "Reduce system order"
  ],
  answer: 1,
  explanation: "Phase plane plots show state evolution in 2D autonomous systems."
},
{
  text: "In $$\\dot{x} = Ax$$, if $$A$$ is diagonal with eigenvalues $$-1$$ and $$-3$$, then the system is:",
  choices: [
    "Stable",
    "Unstable",
    "Marginally stable",
    "Indeterminate"
  ],
  answer: 0,
  explanation: "Both eigenvalues negative ⇒ exponential decay ⇒ stable."
},
{
  text: "What is a fixed point (equilibrium) of a dynamic system?",
  choices: [
    "A point where $$\\dot{x} \\ne 0$$",
    "Where input equals output",
    "Where $$\\dot{x} = 0$$",
    "A singularity in matrix $$A$$"
  ],
  answer: 2,
  explanation: "At equilibrium, the derivative vanishes ⇒ $$\\dot{x} = 0$$."
},
{
  text: "For system $$\\dot{x} = f(x)$$, if $$V(x)$$ is a Lyapunov function and $$\\dot{V}(x) < 0$$, then:",
  choices: [
    "The system is marginally stable",
    "The system is unstable",
    "The equilibrium is locally asymptotically stable",
    "The system is divergent"
  ],
  answer: 2,
  explanation: "If $$V$$ positive definite and $$\\dot{V}$$ negative definite ⇒ local asymptotic stability."
},
{
  text: "In a 2D linear system, a spiral trajectory implies:",
  choices: [
    "Complex eigenvalues with nonzero real part",
    "Real negative eigenvalues",
    "Purely imaginary eigenvalues",
    "System is diagonal"
  ],
  answer: 0,
  explanation: "Spirals arise from complex eigenvalues with nonzero real part ⇒ oscillation + growth or decay."
},{
  text: "A **bifurcation** occurs in a nonlinear system when:",
  choices: [
    "The system reaches steady state",
    "A small change in a parameter causes a qualitative change in behavior",
    "Input increases linearly",
    "All eigenvalues become complex"
  ],
  answer: 1,
  explanation: "Bifurcation is a qualitative change in the structure of trajectories as a parameter varies."
},
{
  text: "What is a **Hopf bifurcation**?",
  choices: [
    "When a fixed point becomes a limit cycle",
    "When eigenvalues become zero",
    "When input equals output",
    "A discrete-time jump condition"
  ],
  answer: 0,
  explanation: "Hopf bifurcation happens when a pair of complex conjugate eigenvalues cross the imaginary axis, giving rise to a periodic orbit."
},
{
  text: "A **limit cycle** refers to:",
  choices: [
    "A divergent trajectory",
    "A fixed point",
    "An isolated periodic solution",
    "A chaotic attractor"
  ],
  answer: 2,
  explanation: "Limit cycles are closed isolated orbits that nearby trajectories approach or repel."
},
{
  text: "Which of the following can indicate **global asymptotic stability**?",
  choices: [
    "All trajectories return to origin only locally",
    "$$V(x) > 0$$ and $$\\dot{V}(x) < 0$$ for all $$x \\ne 0$$",
    "$$A$$ is singular",
    "The system has periodic solutions"
  ],
  answer: 1,
  explanation: "Lyapunov stability with strict negativity of $$\\dot{V}$$ globally ensures global asymptotic convergence."
},
{
  text: "Which type of bifurcation leads to **branching of fixed points** as a parameter changes?",
  choices: [
    "Hopf bifurcation",
    "Saddle-node bifurcation",
    "Pitchfork bifurcation",
    "Transcritical bifurcation"
  ],
  answer: 2,
  explanation: "Pitchfork bifurcation splits a single equilibrium into multiple symmetric fixed points."
},
{
  text: "A **globally stable equilibrium** is:",
  choices: [
    "Stable only for small disturbances",
    "Unreachable under nonlinear inputs",
    "Attractive from all initial states",
    "Always at the origin"
  ],
  answer: 2,
  explanation: "Global stability implies all trajectories converge to the equilibrium from any starting point."
},
{
  text: "If a system exhibits **periodic behavior** regardless of initial conditions, it is said to be:",
  choices: [
    "Globally unstable",
    "Globally periodic",
    "Marginally divergent",
    "Unobservable"
  ],
  answer: 1,
  explanation: "Global periodicity means all trajectories evolve in a repeating orbit, regardless of initial state."
},
{
  text: "Which of the following is **not** true about limit cycles?",
  choices: [
    "They are always linear",
    "They can be stable or unstable",
    "They are periodic",
    "They arise in nonlinear systems"
  ],
  answer: 0,
  explanation: "Limit cycles occur only in nonlinear systems and are inherently nonlinear."
},
{
  text: "In a **transcritical bifurcation**, what typically occurs?",
  choices: [
    "Two equilibria exchange stability",
    "One fixed point disappears",
    "Oscillations begin",
    "A limit cycle emerges"
  ],
  answer: 0,
  explanation: "Transcritical bifurcation occurs when two equilibria meet and swap their stability."
},
{
  text: "Which condition indicates a system is **globally Lyapunov stable**?",
  choices: [
    "Solution stays near equilibrium for small perturbations",
    "Trajectory converges only under feedback",
    "A valid $$V(x)$$ exists over full state space with $$\\dot{V}(x) \\le 0$$",
    "$$A$$ has only imaginary eigenvalues"
  ],
  answer: 2,
  explanation: "Global Lyapunov stability requires $$V(x)$$ to be positive definite and $$\\dot{V}(x)$$ non-positive everywhere."
},{
  text: "In a **saddle-node bifurcation**, what happens as the bifurcation parameter changes?",
  choices: [
    "A stable fixed point becomes unstable",
    "Two fixed points (one stable, one unstable) collide and annihilate",
    "A limit cycle appears",
    "All fixed points disappear"
  ],
  answer: 1,
  explanation: "Saddle-node bifurcation involves the collision and disappearance of a stable and unstable fixed point."
},
{
  text: "Which of the following is true about **globally asymptotically stable** systems?",
  choices: [
    "All initial conditions eventually escape the origin",
    "There exists a unique fixed point globally attractive to all trajectories",
    "Solutions oscillate but do not decay",
    "The Jacobian is always zero"
  ],
  answer: 1,
  explanation: "Global asymptotic stability means all trajectories converge to a single fixed point regardless of initial state."
},
{
  text: "A system exhibits a **stable limit cycle** if:",
  choices: [
    "All eigenvalues of its Jacobian are real",
    "All solutions approach a fixed point",
    "Nearby trajectories spiral toward a closed orbit",
    "It is linear"
  ],
  answer: 2,
  explanation: "Stable limit cycles attract nearby trajectories ⇒ periodic, isolated solutions."
},
{
  text: "Which bifurcation leads to a branch of periodic orbits appearing from an equilibrium?",
  choices: [
    "Transcritical",
    "Pitchfork",
    "Hopf",
    "Saddle-node"
  ],
  answer: 2,
  explanation: "Hopf bifurcations generate periodic orbits from an equilibrium as eigenvalues cross the imaginary axis."
},
{
  text: "Which method is best for proving **global stability**?",
  choices: [
    "Linearization via Jacobian only",
    "Phase portrait sketches",
    "Existence of a Lyapunov function defined over all $$\\mathbb{R}^n$$",
    "Singular perturbation theory"
  ],
  answer: 2,
  explanation: "Constructing a global Lyapunov function with $$\\dot{V}(x) < 0$$ ensures global stability."
},
{
  text: "In a supercritical Hopf bifurcation, the limit cycles that emerge are:",
  choices: [
    "Unstable",
    "Always degenerate",
    "Globally stable",
    "Stable and exist for parameter values beyond the bifurcation point"
  ],
  answer: 3,
  explanation: "In supercritical Hopf bifurcation, small stable limit cycles emerge post-criticality."
},
{
  text: "Which behavior indicates the presence of a **period-doubling cascade**?",
  choices: [
    "Solutions settle into a fixed point",
    "Multiple stable fixed points coexist",
    "Successive bifurcations leading to doubling of orbit period",
    "System loses all equilibrium points"
  ],
  answer: 2,
  explanation: "Period-doubling occurs in chaotic systems where limit cycles double in period through bifurcations."
},
{
  text: "Which of the following is most likely associated with **chaotic dynamics**?",
  choices: [
    "One stable fixed point",
    "A center spiral",
    "An infinite cascade of period-doubling bifurcations",
    "Linear system with complex eigenvalues"
  ],
  answer: 2,
  explanation: "Period-doubling cascades are a classical route to chaos in nonlinear dynamical systems."
},
{
  text: "The orbit $$\\gamma(t)$$ is called periodic if:",
  choices: [
    "$$\\dot{\\gamma}(t) = 0$$",
    "$$\\gamma(t + T) = \\gamma(t)$$ for some $$T > 0$$",
    "$$\\gamma$$ intersects the origin",
    "It passes through a saddle point"
  ],
  answer: 1,
  explanation: "Definition of periodic orbit ⇒ system state repeats with period $$T$$."
},
{
  text: "A globally asymptotically stable equilibrium can still have which of the following?",
  choices: [
    "Local divergence",
    "Multiple isolated equilibria",
    "Periodic orbits",
    "Slow convergence from distant initial conditions"
  ],
  answer: 3,
  explanation: "Convergence might be slow, but global asymptotic stability still holds as long as all paths approach the equilibrium."
},{
  text: "Which of the following conditions guarantees **global exponential stability** of $$\\dot{x} = Ax$$?",
  choices: [
    "All eigenvalues of $$A$$ have non-zero real parts",
    "$$A$$ is nilpotent",
    "$$A$$ is Hurwitz and symmetric",
    "$$x^T A x = 0$$"
  ],
  answer: 2,
  explanation: "If $$A$$ is Hurwitz and symmetric, then there exists a quadratic Lyapunov function that ensures exponential decay."
},
{
  text: "What typically emerges from a **subcritical Hopf bifurcation**?",
  choices: [
    "Stable fixed point becomes globally stable",
    "Unstable limit cycle appears before the bifurcation point",
    "System becomes linear",
    "Fixed point switches sign"
  ],
  answer: 1,
  explanation: "In a subcritical Hopf, an unstable limit cycle exists before the critical value; the fixed point loses stability at bifurcation."
},
{
  text: "A dynamic system with a **globally attractive limit cycle** implies:",
  choices: [
    "All trajectories diverge",
    "Trajectories spiral toward a periodic orbit from any initial state",
    "The origin is a stable node",
    "Multiple equilibria exist"
  ],
  answer: 1,
  explanation: "A globally attractive limit cycle pulls in all trajectories in the phase space regardless of initial condition."
},
{
  text: "Which is a hallmark indicator of a **pitchfork bifurcation**?",
  choices: [
    "Sudden appearance of multiple equilibria symmetrically arranged",
    "Transfer function becomes zero",
    "Equilibrium gains rotational invariance",
    "Eigenvalues become purely imaginary"
  ],
  answer: 0,
  explanation: "Pitchfork bifurcation introduces a symmetric branching of equilibria from a central point as parameters vary."
},
{
  text: "If a Lyapunov function $$V(x)$$ satisfies $$V(x) > 0$$ and $$\\dot{V}(x) = 0$$ for all $$x$$, the system is:",
  choices: [
    "Globally asymptotically stable",
    "Globally marginally stable",
    "Unstable",
    "Exponentially divergent"
  ],
  answer: 1,
  explanation: "When $$\\dot{V} = 0$$ but $$V > 0$$, system is stable in the Lyapunov sense but not necessarily asymptotically stable."
},
{
  text: "A system experiences a **global bifurcation** when:",
  choices: [
    "A single eigenvalue crosses zero",
    "A closed trajectory connects saddle points or loops",
    "Fixed point becomes unstable",
    "Linearization fails locally"
  ],
  answer: 1,
  explanation: "Global bifurcations involve qualitative changes in the system's entire phase portrait—such as homoclinic loops."
},
{
  text: "The condition $$\\gamma(t+T) = \\gamma(t)$$ defines a:",
  choices: [
    "Stable node",
    "Limit cycle",
    "Globally attractive equilibrium",
    "Chaotic orbit"
  ],
  answer: 1,
  explanation: "Such periodicity implies the orbit repeats every $$T$$ units of time ⇒ periodic orbit or limit cycle."
},
{
  text: "Which of the following implies **loss of global stability**?",
  choices: [
    "System becomes linear",
    "A bifurcation parameter causes emergence of multiple attractors",
    "Existence of a single fixed point",
    "Lyapunov function is positive definite"
  ],
  answer: 1,
  explanation: "If new stable states arise due to bifurcation, the system may lose global attraction to the original fixed point."
},
{
  text: "Which type of system behavior suggests the presence of a **homoclinic orbit**?",
  choices: [
    "Solution returns to same saddle point after infinite time",
    "A periodic cycle encloses a node",
    "Fixed points shift positions",
    "All trajectories spiral outwards"
  ],
  answer: 0,
  explanation: "A homoclinic orbit departs and returns to the same saddle point, forming a delicate closed loop."
},
{
  text: "In a nonlinear system, multiple isolated periodic solutions indicate:",
  choices: [
    "Bifurcation has not occurred",
    "Equilibria are globally stable",
    "System has multiple limit cycles",
    "It must be linearizable"
  ],
  answer: 2,
  explanation: "Multiple isolated repeating orbits = multiple limit cycles ⇒ rich dynamic behavior typical in nonlinear systems."
},{
  text: "An **invariant set** in a dynamical system is defined as:",
  choices: [
    "A set of parameter values that keep the system linear",
    "A set in which all trajectories eventually leave",
    "A set where, if a trajectory starts inside it, it remains inside for all future times",
    "A set containing only equilibrium points"
  ],
  answer: 2,
  explanation: "Invariant sets are closed under the flow ⇒ once inside, always inside."
},
{
  text: "Which of the following is a necessary condition for **chaos** in a continuous dynamical system?",
  choices: [
    "Existence of a unique fixed point",
    "Linear time-invariance",
    "Sensitive dependence on initial conditions",
    "Negative eigenvalues only"
  ],
  answer: 2,
  explanation: "Chaos requires sensitive dependence on initial conditions—small differences lead to divergent trajectories."
},
{
  text: "An attractor that is **fractal-shaped and non-periodic**, yet bounded, is called:",
  choices: [
    "Fixed point",
    "Limit cycle",
    "Strange attractor",
    "Chaotic saddle"
  ],
  answer: 2,
  explanation: "Strange attractors characterize chaotic systems—bounded, non-repeating, and fractal."
},
{
  text: "Which system exhibits **deterministic chaos**?",
  choices: [
    "Random noise generator",
    "Lorenz system with specific parameters",
    "Linear stable oscillator",
    "Pure Brownian motion"
  ],
  answer: 1,
  explanation: "The Lorenz system is a classical example of deterministic chaos."
},
{
  text: "What is an example of an **invariant manifold**?",
  choices: [
    "A saddle point",
    "A subspace where dynamics stay if initialized inside",
    "Any line through origin",
    "A set of unstable fixed points"
  ],
  answer: 1,
  explanation: "Invariant manifolds are geometric surfaces (like stable/unstable subspaces) preserved under flow."
},
{
  text: "In chaotic systems, Lyapunov exponents typically:",
  choices: [
    "Are all negative",
    "Are all zero",
    "Include at least one positive exponent",
    "Equal the eigenvalues of $$A$$"
  ],
  answer: 2,
  explanation: "Positive Lyapunov exponent ⇒ sensitive dependence ⇒ hallmark of chaos."
},
{
  text: "The **Julia set** in complex dynamics is:",
  choices: [
    "An attractor in real systems",
    "The set of points with stable behavior",
    "The boundary of initial conditions with chaotic or escaping behavior",
    "A linear invariant set"
  ],
  answer: 2,
  explanation: "The Julia set marks the boundary between stable and unstable behavior in complex maps."
},
{
  text: "Which condition is typical for a set to be considered an **attractor**?",
  choices: [
    "It contains no trajectories",
    "All trajectories escape it",
    "It attracts nearby trajectories and is invariant",
    "It is not time-invariant"
  ],
  answer: 2,
  explanation: "An attractor is invariant and attracts nearby points asymptotically."
},
{
  text: "Which map is known to exhibit **chaotic behavior** even though it's simple in form?",
  choices: [
    "Logistic map: $$x_{n+1} = r x_n (1 - x_n)$$",
    "Linear map: $$x_{n+1} = Ax_n$$",
    "Identity map: $$x_{n+1} = x_n$$",
    "Constant map: $$x_{n+1} = c$$"
  ],
  answer: 0,
  explanation: "For certain values of $$r$$, the logistic map displays bifurcations and chaos."
},
{
  text: "Which of the following best describes **chaotic attractors**?",
  choices: [
    "Unbounded and divergent",
    "Stable periodic orbits",
    "Deterministic yet unpredictable over long time",
    "Always linear and symmetric"
  ],
  answer: 2,
  explanation: "Chaos is deterministic, but long-term prediction is impossible due to sensitivity to initial conditions."
},{
  text: "A fixed point $$x^*$$ of a continuous system $$\\dot{x} = f(x)$$ is **locally stable** if:",
  choices: [
    "All solutions diverge near $$x^*$$",
    "Every trajectory in entire space converges to $$x^*$$",
    "All nearby trajectories stay near $$x^*$$ for small perturbations",
    "$$\\dot{x} = 0$$ for all $$x$$"
  ],
  answer: 2,
  explanation: "Local stability means solutions starting close to $$x^*$$ remain close for all time."
},
{
  text: "Which of the following always implies **boundedness** of trajectories in $$\\dot{x} = Ax$$?",
  choices: [
    "$$A$$ is symmetric with negative eigenvalues",
    "$$\\text{det}(A) > 0$$",
    "$$\\|A\\| < 1$$",
    "System has more inputs than states"
  ],
  answer: 0,
  explanation: "A symmetric matrix with negative eigenvalues ⇒ exponential decay ⇒ solutions remain bounded."
},
{
  text: "The **local stability** of an equilibrium point can be determined by:",
  choices: [
    "Computing the eigenvalues of the Jacobian at the point",
    "Evaluating the input $$u(t)$$",
    "Linearizing all states at the origin",
    "Checking boundedness of $$\\dot{x}(t)$$ directly"
  ],
  answer: 0,
  explanation: "Linearization and eigenvalue analysis of the Jacobian at an equilibrium determine local behavior."
},
{
  text: "A solution $$x(t)$$ to $$\\dot{x} = Ax$$ is **bounded** if and only if:",
  choices: [
    "All eigenvalues of $$A$$ are negative",
    "The matrix exponential $$e^{At}$$ is bounded for all $$t \\ge 0$$",
    "$$\\|x(t)\\| = 0$$",
    "$$\\text{Tr}(A) = 0$$"
  ],
  answer: 1,
  explanation: "If $$e^{At}$$ grows without bound, then solutions diverge ⇒ boundedness is tied directly to $$e^{At}$$."
},
{
  text: "Which of the following implies a system is **locally asymptotically stable**?",
  choices: [
    "All eigenvalues of the Jacobian have zero real parts",
    "Lyapunov function exists with $$\\dot{V}(x) < 0$$ near equilibrium",
    "All states are periodic",
    "Input vanishes"
  ],
  answer: 1,
  explanation: "Negative-definite $$\\dot{V}$$ near equilibrium ⇒ convergence ⇒ local asymptotic stability."
},
{
  text: "Which example represents a **bounded but not asymptotically stable** trajectory?",
  choices: [
    "$$x(t) = 0$$",
    "$$x(t) = \\sin(t)$$",
    "$$x(t) = e^{-t}$$",
    "$$x(t) = t$$"
  ],
  answer: 1,
  explanation: "$$\\sin(t)$$ stays bounded ∈ [–1, 1] but does not converge ⇒ stable but not asymptotically."
},
{
  text: "Boundedness implies stability only if:",
  choices: [
    "The system is autonomous",
    "Input is zero",
    "Trajectories stay near equilibrium for all time",
    "None of the above"
  ],
  answer: 3,
  explanation: "Boundedness alone does not imply Lyapunov stability without additional constraints."
},
{
  text: "In a nonlinear system $$\\dot{x} = f(x)$$, a fixed point $$x^*$$ is **unstable** if:",
  choices: [
    "Some nearby trajectories converge to $$x^*$$",
    "All eigenvalues of $$Df(x^*)$$ have zero real parts",
    "There exists $$\\epsilon > 0$$ such that some initial conditions $$\\|x(0)-x^*\\| < \\epsilon$$ lead to divergence",
    "The system is bounded"
  ],
  answer: 2,
  explanation: "Existence of divergent behavior arbitrarily close ⇒ instability in the Lyapunov sense."
},
{
  text: "Which property ensures all solutions of $$\\dot{x} = f(x)$$ remain finite for all $$t \\ge 0$$?",
  choices: [
    "$$f(x)$$ is globally Lipschitz",
    "$$f(x)$$ has constant sign",
    "System is linear",
    "System has an input-output model"
  ],
  answer: 0,
  explanation: "Global Lipschitz condition ensures existence and uniqueness of bounded solutions over $$\\mathbb{R}^+$$."
},
{
  text: "A linear system $$\\dot{x} = Ax$$ is locally asymptotically stable if:",
  choices: [
    "Eigenvalues of $$A$$ have zero real parts",
    "Eigenvalues of $$A$$ have positive real parts",
    "Eigenvalues of $$A$$ all have negative real parts",
    "Trace of $$A$$ is zero"
  ],
  answer: 2,
  explanation: "Negative real parts ⇒ solutions decay toward equilibrium ⇒ asymptotic stability."

},{
  text: "What is the standard form of a first-order linear differential equation?",
  choices: [
    "$$\\frac{dy}{dx} + P(x)y = Q(x)$$",
    "$$y'' + y = 0$$",
    "$$y = mx + b$$",
    "$$\\frac{dy}{dx} = y^2$$"
  ],
  answer: 0,
  explanation: "The standard linear form is $$\\frac{dy}{dx} + P(x)y = Q(x)$$, solvable using an integrating factor."
},
{
  text: "What is the method of solving $$\\frac{dy}{dx} = ky$$ where $$k$$ is a constant?",
  choices: [
    "Change of variable",
    "Separation of variables",
    "Integrating factor",
    "Laplace transform"
  ],
  answer: 1,
  explanation: "The equation is separable: $$\\frac{dy}{y} = k dx$$ ⇒ solution is $$y = Ce^{kx}$$."
},
{
  text: "Which of the following is a nonlinear differential equation?",
  choices: [
    "$$\\frac{dy}{dx} = y + \\cos(x)$$",
    "$$\\frac{dy}{dx} = y^2 + 1$$",
    "$$\\frac{dy}{dx} + y = x$$",
    "$$\\frac{dy}{dx} = 3y$$"
  ],
  answer: 1,
  explanation: "The term $$y^2$$ makes the equation nonlinear since y is raised to a power other than 1."
},
{
  text: "If $$y'' + 9y = 0$$, what is the nature of the solution?",
  choices: [
    "Exponential decay",
    "Linear growth",
    "Oscillatory (trigonometric) solution",
    "Unbounded exponential growth"
  ],
  answer: 2,
  explanation: "This is a second-order constant-coefficient homogeneous equation ⇒ solution: $$y = A\\cos(3x) + B\\sin(3x)$$."
},
{
  text: "How do you solve an exact equation of the form $$M(x,y)dx + N(x,y)dy = 0$$?",
  choices: [
    "Separation of variables",
    "Integrating factor",
    "Direct integration using partial derivatives",
    "Euler’s method"
  ],
  answer: 2,
  explanation: "Exact equations satisfy $$\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x}$$ ⇒ solution via scalar potential function $$F(x,y)$$."
},
{
  text: "Which method converts a second-order ODE into a system of first-order equations?",
  choices: [
    "Fourier analysis",
    "State-space transformation",
    "Inverse derivative operator",
    "Laplace transform"
  ],
  answer: 1,
  explanation: "Converting higher-order ODEs into first-order systems allows matrix-based and numerical approaches."
},
{
  text: "What is the general solution of $$\\frac{dy}{dx} = -2y + 4$$?",
  choices: [
    "$$y = 2 + Ce^{-2x}$$",
    "$$y = 4 + Ce^{2x}$$",
    "$$y = Ce^{-2x}$$",
    "$$y = 2e^{-4x}$$"
  ],
  answer: 0,
  explanation: "Solution = particular + homogeneous: $$y = 2 + Ce^{-2x}$$."
},
{
  text: "What condition ensures a first-order linear equation $$dy/dx + P(x)y = Q(x)$$ is solvable by integrating factor?",
  choices: [
    "P(x) and Q(x) must be continuous",
    "Only if Q(x) = 0",
    "Must be second-order",
    "No conditions"
  ],
  answer: 0,
  explanation: "Continuity of $$P(x)$$ and $$Q(x)$$ on an interval ⇒ existence of a well-defined integrating factor."
},
{
  text: "Which of the following characterizes a homogeneous linear second-order ODE?",
  choices: [
    "Input = output",
    "Includes a nonzero term on the right-hand side",
    "All terms involve the function and its derivatives only",
    "No general solution exists"
  ],
  answer: 2,
  explanation: "A homogeneous linear ODE has zero on the RHS ⇒ only terms in y and its derivatives appear."
},
{
  text: "What is the first step in solving $$\\frac{dy}{dx} = \\frac{x}{1 + y^2}$$ using separation of variables?",
  choices: [
    "Differentiate both sides",
    "Group all terms on one side",
    "Move variables so x and y are on opposite sides",
    "Apply trigonometric substitution"
  ],
  answer: 2,
  explanation: "Separate: $$ (1 + y^2) dy = x dx $$ ⇒ integrate both sides."
},{
  text: "What type of equation is $$y'' + 4y' + 4y = 0$$?",
  choices: [
    "Nonlinear second-order",
    "Homogeneous linear with repeated real roots",
    "Nonhomogeneous first-order",
    "Equation with variable coefficients"
  ],
  answer: 1,
  explanation: "The characteristic equation is $$r^2 + 4r + 4 = 0$$ ⇒ repeated root $$r = -2$$ ⇒ solution involves $$y = (A + Bx)e^{-2x}$$."
},
{
  text: "What is the general solution to $$y'' + y = 0$$?",
  choices: [
    "$$Ae^x + Be^{-x}$$",
    "$$Ax + B$$",
    "$$A\\cos(x) + B\\sin(x)$$",
    "$$Ae^{ix}$$ only"
  ],
  answer: 2,
  explanation: "The characteristic equation yields complex roots ±i ⇒ oscillatory solution: $$y = A\\cos(x) + B\\sin(x)$$."
},
{
  text: "For the equation $$y'' - 2y' + y = 0$$, what kind of roots are obtained?",
  choices: [
    "Distinct real",
    "Repeated real",
    "Complex conjugates",
    "Not computable"
  ],
  answer: 1,
  explanation: "Characteristic equation: $$r^2 - 2r + 1 = 0$$ ⇒ repeated root $$r = 1$$."
},
{
  text: "Which method is most appropriate to solve $$\\frac{dy}{dx} = \\frac{1}{x + y}$$?",
  choices: [
    "Separation of variables",
    "Bernoulli equation",
    "Substitution: $$u = x + y$$",
    "Integrating factor"
  ],
  answer: 2,
  explanation: "Substitute $$u = x + y$$ ⇒ differential equation becomes separable in $$u$$ and $$x$$."
},
{
  text: "If a second-order linear ODE has complex roots $$r = \\alpha \\pm i\\beta$$, what is the general solution?",
  choices: [
    "$$y = Ae^{\\alpha x} + Be^{\\beta x}$$",
    "$$y = Ae^{(\\alpha + \\beta)x}$$",
    "$$y = e^{\\alpha x}(A\\cos(\\beta x) + B\\sin(\\beta x))$$",
    "$$y = A\\cosh(\\alpha x) + B\\sinh(\\beta x)$$"
  ],
  answer: 2,
  explanation: "Complex roots yield exponential modulated trigonometric solutions."
},
{
  text: "What is the integrating factor $$\\mu(x)$$ for $$\\frac{dy}{dx} + 3y = x$$?",
  choices: [
    "$$e^{3x}$$",
    "$$e^{x^3}$$",
    "$$e^{-3x}$$",
    "$$e^{x}$$"
  ],
  answer: 0,
  explanation: "Integrating factor is $$\\mu(x) = e^{\\int 3dx} = e^{3x}$$."
},
{
  text: "Which solution form fits a second-order equation with repeated real root $$r$$?",
  choices: [
    "$$y = Ae^{rx} + Be^{rx}$$",
    "$$y = Ae^{rx} + Bxe^{rx}$$",
    "$$y = Ax^r + Bx^{-r}$$",
    "$$y = A\\cos(rx) + B\\sin(rx)$$"
  ],
  answer: 1,
  explanation: "For repeated root, solution is $$y = (A + Bx)e^{rx}$$."
},
{
  text: "Which of the following equations is separable?",
  choices: [
    "$$\\frac{dy}{dx} = \\frac{x + y}{x}$$",
    "$$\\frac{dy}{dx} = \\frac{y}{x}$$",
    "$$\\frac{dy}{dx} = x + y$$",
    "$$\\frac{dy}{dx} = \\ln(x + y)$$"
  ],
  answer: 1,
  explanation: "Can be separated as $$\\frac{dy}{y} = \\frac{dx}{x}$$ ⇒ logarithmic integration."
},
{
  text: "What kind of ODE is $$y'' + 5x y' + y = \\sin(x)$$?",
  choices: [
    "Nonlinear nonhomogeneous",
    "Homogeneous with constant coefficients",
    "Nonhomogeneous with variable coefficients",
    "Euler–Cauchy"
  ],
  answer: 2,
  explanation: "Presence of $$x$$ in the coefficient of $$y'$$ ⇒ variable coefficients; RHS ≠ 0 ⇒ nonhomogeneous."
},
{
  text: "What condition guarantees a unique solution to a first-order IVP $$\\frac{dy}{dx} = f(x, y)$$, $$y(x_0) = y_0$$?",
  choices: [
    "f(x, y) is differentiable once",
    "f is linear",
    "f and $$\\frac{\\partial f}{\\partial y}$$ are continuous near $$(x_0, y_0)$$",
    "f is periodic"
  ],
  answer: 2,
  explanation: "The Picard–Lindelöf (existence and uniqueness) theorem uses continuity of $$f$$ and its partial wrt $$y$$."
},{
  text: "What is the first step in solving $$y' = y \\tan(x)$$ using separation of variables?",
  choices: [
    "Differentiate both sides",
    "Move $$y$$ and $$x$$ terms to opposite sides",
    "Multiply both sides by $$\\tan(x)$$",
    "Guess the solution"
  ],
  answer: 1,
  explanation: "Separate: $$\\frac{dy}{y} = \\tan(x)dx$$ ⇒ then integrate both sides."
},
{
  text: "Which of the following ODEs models exponential decay?",
  choices: [
    "$$\\frac{dy}{dt} = ky$$ with $$k > 0$$",
    "$$\\frac{dy}{dt} = -ky$$ with $$k > 0$$",
    "$$\\frac{dy}{dt} = y^2$$",
    "$$\\frac{dy}{dt} = \\ln(y)$$"
  ],
  answer: 1,
  explanation: "Negative proportionality indicates decay: $$y = Ce^{-kt}$$."
},
{
  text: "What is the general solution of the homogeneous equation $$y'' - 6y' + 9y = 0$$?",
  choices: [
    "$$Ae^{-3x} + Be^{3x}$$",
    "$$Ae^{3x} + Bxe^{3x}$$",
    "$$Ae^{9x} + Be^{-9x}$$",
    "$$Ae^{3x} + Be^{-3x}$$"
  ],
  answer: 1,
  explanation: "Characteristic equation: $$r^2 - 6r + 9 = 0$$ ⇒ repeated root $$r = 3$$ ⇒ $$y = (A + Bx)e^{3x}$$."
},
{
  text: "Which equation is a Bernoulli equation?",
  choices: [
    "$$y' + 2y = \\frac{1}{x}$$",
    "$$y' + y = y^2$$",
    "$$y'' + y = 0$$",
    "$$y' = y/x$$"
  ],
  answer: 1,
  explanation: "Bernoulli equations have the form: $$y' + P(x)y = Q(x)y^n$$."
},
{
  text: "Which method is best suited for solving $$y'' + y = \\tan(x)$$?",
  choices: [
    "Undetermined coefficients",
    "Variation of parameters",
    "Laplace transform",
    "Separation of variables"
  ],
  answer: 1,
  explanation: "Because RHS is not a polynomial, exponential, or sine/cos ⇒ use variation of parameters."
},
{
  text: "What property does a solution of $$\\frac{dy}{dx} = y^2$$ exhibit?",
  choices: [
    "Finite for all $$x$$",
    "Symmetric around $$x=0$$",
    "Has a vertical asymptote (finite blow-up)",
    "No equilibrium points"
  ],
  answer: 2,
  explanation: "Solution: $$y = \\frac{1}{C - x}$$ ⇒ blow-up occurs at $$x = C$$."
},
{
  text: "Which of the following is a linear second-order nonhomogeneous ODE?",
  choices: [
    "$$y'' + y' + y = 0$$",
    "$$y'' + y = \\sin(x)$$",
    "$$y'' = y y'$$",
    "$$y'' + x^2 = 0$$"
  ],
  answer: 1,
  explanation: "Linear (y and derivatives appear linearly) and nonhomogeneous since RHS ≠ 0."
},
{
  text: "What is the Laplace transform of $$f(t) = e^{2t}$$?",
  choices: [
    "$$\\frac{1}{s - 2}$$",
    "$$\\frac{1}{s + 2}$$",
    "$$\\frac{s}{s^2 + 4}$$",
    "$$s e^{-2t}$$"
  ],
  answer: 0,
  explanation: "Standard Laplace transform: $$\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s - a}$$ for $$s > a$$."
},
{
  text: "What type of solution does the equation $$y'' + 4y = \\delta(t - \\pi)$$ involve?",
  choices: [
    "Continuous only",
    "Impulse response",
    "Pure sine wave",
    "Polynomial function"
  ],
  answer: 1,
  explanation: "The Dirac delta function $$\\delta(t - a)$$ introduces an instantaneous impulse at $$t = a$$."
},
{
  text: "In the modeling equation $$m\\ddot{x} + b\\dot{x} + kx = 0$$, what does $$b$$ represent?",
  choices: [
    "Mass",
    "Spring stiffness",
    "Damping coefficient",
    "External force"
  ],
  answer: 2,
  explanation: "The term $$b\\dot{x}$$ models resistance or damping (e.g. friction or air drag)."
},{
  text: "Which of the following equations is an example of an Euler–Cauchy equation?",
  choices: [
    "$$x^2 y'' + 3x y' + 2y = 0$$",
    "$$y'' + y = 0$$",
    "$$xy'' + y' = \\ln(x)$$",
    "$$y'' - y = 0$$"
  ],
  answer: 0,
  explanation: "Euler–Cauchy equations have the form $$x^2 y'' + a x y' + b y = f(x)$$ — variable coefficients."
},
{
  text: "Which condition leads to resonance in a second-order linear system $$y'' + 2\\zeta\\omega y' + \\omega^2 y = F(t)$$?",
  choices: [
    "Driving frequency equals natural frequency",
    "Damping ratio $$\\zeta > 1$$",
    "No external forcing $$F(t) = 0$$",
    "Initial conditions are zero"
  ],
  answer: 0,
  explanation: "Resonance occurs when external forcing matches system’s natural frequency ⇒ amplitude grows."
},
{
  text: "Which numerical method approximates solutions using $$y_{n+1} = y_n + h f(x_n, y_n)$$?",
  choices: [
    "Runge-Kutta",
    "Trapezoidal rule",
    "Euler’s method",
    "Adams–Bashforth"
  ],
  answer: 2,
  explanation: "This is forward (explicit) Euler’s method — first-order step-by-step approximation."
},
{
  text: "What does it mean if a solution $$y(t)$$ has a finite escape time?",
  choices: [
    "It converges to zero",
    "It repeats after finite time",
    "It becomes infinite in finite time",
    "It stays within bounds forever"
  ],
  answer: 2,
  explanation: "Finite escape time ⇒ solution “blows up” (diverges) at a specific finite $$t$$."
},
{
  text: "What is the Laplace transform of $$\\sin(at)$$?",
  choices: [
    "$$\\frac{a}{s^2 + a^2}$$",
    "$$\\frac{s}{s^2 + a^2}$$",
    "$$\\frac{1}{s + a}$$",
    "$$a e^{-s}$$"
  ],
  answer: 0,
  explanation: "Standard result: $$\\mathcal{L}\\{\\sin(at)\\} = \\frac{a}{s^2 + a^2}$$."
},
{
  text: "Which condition makes $$y = e^{-t}\\sin(t)$$ a solution to a homogeneous linear ODE?",
  choices: [
    "Constant coefficients with real roots",
    "Variable coefficients",
    "Repeated complex roots",
    "Complex conjugate roots with negative real parts"
  ],
  answer: 3,
  explanation: "Form matches $$e^{\\alpha t}(A\\cos(\\beta t) + B\\sin(\\beta t))$$ ⇒ complex roots with real part $$< 0$$."
},
{
  text: "If a second-order ODE has no external forcing and zero damping, what is the solution behavior?",
  choices: [
    "Exponential decay",
    "Underdamped oscillation",
    "Pure sinusoidal oscillation",
    "Overdamped non-oscillatory"
  ],
  answer: 2,
  explanation: "Zero damping and no forcing ⇒ natural oscillation at frequency $$\\omega_0$$ ⇒ $$y = A\\cos(\\omega_0 t) + B\\sin(\\omega_0 t)$$."
},
{
  text: "What’s the general solution of $$y'' = 0$$?",
  choices: [
    "$$y = C e^x$$",
    "$$y = Ax + B$$",
    "$$y = A\\sin(x) + B\\cos(x)$$",
    "$$y = \\ln(x)$$"
  ],
  answer: 1,
  explanation: "Integrate twice ⇒ $$y' = C_1$$, then $$y = C_1 x + C_2$$ ⇒ linear function."
},
{
  text: "A linear system is called overdamped if:",
  choices: [
    "Its roots are complex",
    "Damping ratio $$\\zeta = 0$$",
    "It has real, unequal negative roots",
    "Forcing term is zero"
  ],
  answer: 2,
  explanation: "Overdamped ⇒ roots are real and negative, but distinct ⇒ no oscillation."
},
{
  text: "What does it mean if two solutions to a linear homogeneous ODE are linearly dependent?",
  choices: [
    "They produce the same response",
    "Their Wronskian is nonzero",
    "They span the solution space",
    "One is a scalar multiple of the other"
  ],
  answer: 3,
  explanation: "Linearly dependent ⇒ not enough to form general solution ⇒ one is just a scalar multiple of the other."
},{
  text: "What is the first step in the process of mathematical modeling?",
  choices: [
    "Solving the differential equation",
    "Collecting data only",
    "Formulating assumptions and defining variables",
    "Validating with real-world results"
  ],
  answer: 2,
  explanation: "Modeling starts with identifying key quantities, relationships, and simplifying assumptions."
},
{
  text: "Which type of model uses time as a continuous variable?",
  choices: [
    "Discrete-time model",
    "Static model",
    "Continuous-time model",
    "Algebraic model"
  ],
  answer: 2,
  explanation: "Continuous-time models use derivatives and describe dynamics over continuous domains."
},
{
  text: "In a population growth model $$\\frac{dP}{dt} = kP$$, the model implies:",
  choices: [
    "Constant population",
    "Linear growth",
    "Exponential growth",
    "Decaying oscillations"
  ],
  answer: 2,
  explanation: "This is the classic exponential model ⇒ $$P(t) = P_0 e^{kt}$$."
},
{
  text: "Dimensional analysis is mainly used to:",
  choices: [
    "Convert units only",
    "Eliminate constants",
    "Reduce number of variables using scaling",
    "Solve nonlinear systems"
  ],
  answer: 2,
  explanation: "It helps identify dimensionless quantities and reduce parameters via Buckingham Pi theorem."
},
{
  text: "Which of the following is typically a linear model?",
  choices: [
    "$$y = ax^2 + bx + c$$",
    "$$y = ae^{bx}$$",
    "$$y = mx + b$$",
    "$$y = \\frac{1}{x}$$"
  ],
  answer: 2,
  explanation: "Only $$y = mx + b$$ is linear in both variable and parameters."
},
{
  text: "A model is said to be validated when:",
  choices: [
    "It matches any simulation result",
    "It fits all data exactly",
    "Its predictions align reasonably with real-world observations",
    "It requires no parameters"
  ],
  answer: 2,
  explanation: "Validation means the model reflects physical or empirical behavior reliably."
},
{
  text: "In modeling a mass-spring-damper system, which term represents damping?",
  choices: [
    "$$kx$$",
    "$$m\\ddot{x}$$",
    "$$b\\dot{x}$$",
    "$$F_{ext}(t)$$"
  ],
  answer: 2,
  explanation: "The damping force is proportional to velocity: $$F_d = b\\dot{x}$$."
},
{
  text: "Which assumption is often made in basic projectile motion modeling?",
  choices: [
    "No gravity",
    "Air resistance is significant",
    "Flat Earth approximation and constant gravity",
    "Wind drag increases with time"
  ],
  answer: 2,
  explanation: "Simplified models assume constant g and ignore curvature/air resistance."
},
{
  text: "Which of the following is a limitation of mathematical models?",
  choices: [
    "They can’t be simulated",
    "They always produce exact predictions",
    "They depend on simplifying assumptions that may not always hold",
    "They don’t require any data"
  ],
  answer: 2,
  explanation: "All models are abstractions — assumptions can limit validity in real-world contexts."
},
{
  text: "Which model best describes radioactive decay?",
  choices: [
    "$$N(t) = N_0 - kt$$",
    "$$N(t) = \\frac{1}{1 + kt}$$",
    "$$\\frac{dN}{dt} = -kN$$",
    "$$N(t) = k t^2$$"
  ],
  answer: 2,
  explanation: "Radioactive decay is modeled by a first-order linear ODE ⇒ exponential decrease."
},{
  text: "Which of the following best describes a logistic growth model?",
  choices: [
    "Population grows linearly without bound",
    "Growth rate decreases as population nears carrying capacity",
    "Population shrinks exponentially",
    "Growth rate is constant at all times"
  ],
  answer: 1,
  explanation: "Logistic growth models saturation due to limited resources ⇒ $$\\frac{dP}{dt} = rP\\left(1 - \\frac{P}{K}\\right)$$."
},
{
  text: "A dimensionless quantity:",
  choices: [
    "Has physical units that cancel out",
    "Has units of length only",
    "Depends on time",
    "Cannot appear in modeling"
  ],
  answer: 0,
  explanation: "Dimensionless variables arise by scaling ⇒ often used in nondimensionalization and similarity solutions."
},
{
  text: "Which of the following is a discrete-time population model?",
  choices: [
    "$$P(t+1) = r P(t)(1 - P(t))$$",
    "$$\\frac{dP}{dt} = rP$$",
    "$$P'(t) = -kP$$",
    "$$P(t) = Ce^{-kt}$$"
  ],
  answer: 0,
  explanation: "First equation is logistic map in discrete time ⇒ depends on $$P(t)$$ recursively."
},
{
  text: "A key reason to use nondimensional variables in modeling is to:",
  choices: [
    "Hide complexity",
    "Remove constants from equations",
    "Compare relative effects and simplify analysis",
    "Avoid numerical solutions"
  ],
  answer: 2,
  explanation: "Rescaling variables can reduce parameters, reveal dominant effects, and expose underlying structure."
},
{
  text: "In a predator-prey model, which term typically decreases the prey population?",
  choices: [
    "$$+aP$$",
    "$$-bPF$$",
    "$$+cF$$",
    "$$dP^2$$"
  ],
  answer: 1,
  explanation: "The interaction term $$-bPF$$ reflects prey consumed due to predator encounters."
},
{
  text: "What does a steady state in a dynamical model represent?",
  choices: [
    "An oscillatory solution",
    "A point where variables stop changing over time",
    "A point that cannot be reached",
    "An unbounded solution"
  ],
  answer: 1,
  explanation: "Steady state ⇒ $$\\frac{dx}{dt} = 0$$ ⇒ state variables constant in time."
},
{
  text: "Which method is used to fit a model function to data?",
  choices: [
    "Separation of variables",
    "Linear regression or optimization techniques",
    "Laplace transforms",
    "Runge-Kutta method"
  ],
  answer: 1,
  explanation: "Model fitting often uses least squares or optimization to minimize error between data and model."
},
{
  text: "In epidemic modeling, what does $$R_0 > 1$$ indicate?",
  choices: [
    "Disease will die out",
    "System reaches equilibrium quickly",
    "An outbreak will grow in population",
    "No individuals are susceptible"
  ],
  answer: 2,
  explanation: "Basic reproduction number $$R_0$$ above 1 means each infected person infects >1 others ⇒ epidemic spreads."
},
{
  text: "Which of the following is a simplifying assumption in fluid modeling?",
  choices: [
    "Nonzero compressibility",
    "Nonlinear turbulence",
    "Constant viscosity and incompressibility",
    "Variable density and pressure"
  ],
  answer: 2,
  explanation: "Basic models (e.g. Navier–Stokes) often assume incompressible, Newtonian, constant-viscosity flows."
},
{
  text: "A nondimensional group appearing in fluid dynamics is:",
  choices: [
    "Planck constant",
    "Euler number",
    "Gravitational acceleration",
    "Reynolds number"
  ],
  answer: 3,
  explanation: "Reynolds number compares inertial to viscous forces ⇒ crucial in classifying fluid flow behavior."
},{
  text: "If a quantity doubles every fixed time interval, which type of model fits best?",
  choices: [
    "Linear model",
    "Quadratic model",
    "Exponential model",
    "Logarithmic model"
  ],
  answer: 2,
  explanation: "Doubling behavior is exponential ⇒ $$Q(t) = Q_0 \\, 2^{t/T} = Q_0 e^{kt}$$."
},
{
  text: "Which step best reflects model refinement?",
  choices: [
    "Choosing new variables",
    "Adjusting assumptions or structure based on error or testing",
    "Discarding the model",
    "Switching to a graphical calculator"
  ],
  answer: 1,
  explanation: "Refinement involves improving accuracy or generality using results or feedback."
},
{
  text: "In a model of motion with air resistance, which force is commonly added?",
  choices: [
    "Constant force",
    "Force proportional to acceleration",
    "Drag proportional to velocity or velocity squared",
    "Friction proportional to displacement"
  ],
  answer: 2,
  explanation: "Air resistance is modeled as $$F = -kv$$ or $$F = -kv^2$$ depending on regime."
},
{
  text: "A model describing seasonal population variation is likely to include:",
  choices: [
    "A constant growth term",
    "No time dependence",
    "A sinusoidal or periodic function",
    "Pure exponential decay"
  ],
  answer: 2,
  explanation: "Seasonal effects are captured with periodic functions: $$P(t) = A\\cos(\\omega t) + B$$."
},
{
  text: "Which of the following represents an assumption behind a linear model?",
  choices: [
    "Rates change over time",
    "Output is constant",
    "Change is proportional to input",
    "There’s a threshold before change starts"
  ],
  answer: 2,
  explanation: "Linear models assume constant rate of change or proportionality."
},
{
  text: "In nondimensionalization, the goal is to:",
  choices: [
    "Create variables with large units",
    "Reduce number of governing parameters",
    "Introduce randomness",
    "Add more equations"
  ],
  answer: 1,
  explanation: "Scaling variables reveals key structure and reduces dependence on physical units."
},
{
  text: "What is the meaning of a parameter in a mathematical model?",
  choices: [
    "A known quantity that helps control system behavior",
    "An input variable",
    "An error factor",
    "A random fluctuation"
  ],
  answer: 0,
  explanation: "Parameters are fixed in a model run but control its overall behavior and dynamics."
},
{
  text: "In a model, if output is very sensitive to small changes in parameters, this is called:",
  choices: [
    "Stability",
    "Robustness",
    "Instability or sensitivity",
    "Stochasticity"
  ],
  answer: 2,
  explanation: "Sensitivity analysis examines how small parameter changes affect outcomes."
},
{
  text: "Which of the following best reflects a deterministic model?",
  choices: [
    "Includes random noise",
    "Yields same output for same input every time",
    "Depends on empirical rules only",
    "Has unpredictable solutions"
  ],
  answer: 1,
  explanation: "A deterministic model has no randomness — output is determined completely by input and parameters."
},
{
  text: "Which modeling assumption is violated if a chemical reaction model ignores the effect of temperature?",
  choices: [
    "Steady state",
    "Closed system",
    "Constant reaction rate",
    "Well-mixed system"
  ],
  answer: 2,
  explanation: "Reaction rates depend heavily on temperature (Arrhenius law) ⇒ ignoring it assumes it's constant."
},{
  text: "Which component is essential in building a mechanistic model?",
  choices: [
    "Using data only",
    "Random assignment of variables",
    "Understanding underlying physical or biological processes",
    "Assuming linearity"
  ],
  answer: 2,
  explanation: "Mechanistic models are grounded in known mechanisms and laws (e.g., Newton’s laws, conservation)."
},
{
  text: "In a heat diffusion model, the governing equation is usually:",
  choices: [
    "$$\\frac{dT}{dx} = kT$$",
    "$$\\nabla \\cdot (k \\nabla T) = \\frac{\\partial T}{\\partial t}$$",
    "$$\\frac{d^2T}{dt^2} = -T$$",
    "$$T = Ce^{kt}$$"
  ],
  answer: 1,
  explanation: "This is the heat/diffusion equation — a parabolic PDE that governs temperature evolution in space and time."
},
{
  text: "If a model produces a solution that oscillates forever without damping, the system is likely:",
  choices: [
    "Overdamped",
    "Nonlinear",
    "Critically damped",
    "Undamped and conservative"
  ],
  answer: 3,
  explanation: "Conservative systems (e.g. ideal pendulum) oscillate indefinitely if no damping is present."
},
{
  text: "Which of the following best describes a system of coupled ODEs?",
  choices: [
    "Multiple equations where each depends only on one variable",
    "A higher-order equation rewritten in components",
    "A system where variables affect each other's rates of change",
    "Independent algebraic equations"
  ],
  answer: 2,
  explanation: "In coupled systems, the evolution of each variable depends on others — e.g. predator-prey models."
},
{
  text: "What is the role of boundary conditions in PDE modeling?",
  choices: [
    "They define initial values of parameters",
    "They help determine constants of integration",
    "They define values/behaviors at the domain's edges to ensure well-posedness",
    "They replace the governing equation"
  ],
  answer: 2,
  explanation: "Boundary conditions ensure uniqueness and physical relevance in PDEs."
},
{
  text: "Which criterion determines if a model is well-posed?",
  choices: [
    "Model must have fewer equations than variables",
    "It must have a unique solution that depends continuously on inputs",
    "It must have random parameters",
    "Solutions must diverge under perturbation"
  ],
  answer: 1,
  explanation: "Well-posed problems (per Hadamard) have existence, uniqueness, and continuous dependence."
},
{
  text: "Which aspect is typically tested during model calibration?",
  choices: [
    "Numerical stability only",
    "Comparing solutions against analytical expressions",
    "Fitting parameter values to match observed data",
    "Eliminating nonlinearities"
  ],
  answer: 2,
  explanation: "Calibration adjusts parameters so the model aligns closely with empirical behavior."
},
{
  text: "In compartmental models (e.g. SIR), compartments represent:",
  choices: [
    "Randomized simulations",
    "Different population states like susceptible, infected, recovered",
    "Velocity fields",
    "Energy levels of molecules"
  ],
  answer: 1,
  explanation: "Each compartment corresponds to a stage/state in a population’s transition over time."
},
{
  text: "Which of the following justifies neglecting air resistance in modeling projectile motion?",
  choices: [
    "Low-speed motion in vacuum-like conditions",
    "Heavily damped dynamics",
    "Symmetrical trajectory always",
    "Projectile mass being large"
  ],
  answer: 0,
  explanation: "If air drag is negligible (e.g. slow speed or dense object), motion can be approximated without drag terms."
},
{
  text: "A sensitivity analysis helps determine:",
  choices: [
    "Stability of ODEs only",
    "Which initial conditions yield oscillations",
    "How variation in inputs affects outputs",
    "Whether a model is exact"
  ],
  answer: 2,
  explanation: "It measures how sensitive model predictions are to changes in parameters or initial values."
},{
  text: "Which equation models diffusion in one dimension?",
  choices: [
    "$$\\frac{du}{dt} = D\\frac{\\partial^2 u}{\\partial x^2}$$",
    "$$u' = ru(1 - u)$$",
    "$$\\frac{d^2u}{dt^2} + \\omega^2 u = 0$$",
    "$$\\nabla \\cdot u = 0$$"
  ],
  answer: 0,
  explanation: "This is Fick’s second law: classical diffusion equation describing concentration over time."
},
{
  text: "In ecological modeling, the term ‘carrying capacity’ refers to:",
  choices: [
    "The maximum possible input",
    "A fixed population rate",
    "The largest sustainable population the environment can support",
    "The number of initial individuals"
  ],
  answer: 2,
  explanation: "Carrying capacity $$K$$ defines population ceiling due to limited resources in logistic models."
},
{
  text: "A compartment model that includes birth and death rates is typically:",
  choices: [
    "Static and algebraic",
    "Stochastic",
    "Dynamic and time-dependent",
    "Linear time-invariant"
  ],
  answer: 2,
  explanation: "Birth and death affect population over time ⇒ model must include time evolution."
},
{
  text: "In cost modeling, fixed cost refers to:",
  choices: [
    "Cost that increases with production",
    "Variable supply expense",
    "Cost that remains constant regardless of quantity",
    "Tax-dependent component"
  ],
  answer: 2,
  explanation: "Fixed cost = constant base cost (e.g. rent, setup) independent of output level."
},
{
  text: "Which function best models saturation behavior (e.g. enzyme reactions)?",
  choices: [
    "$$y = mx + b$$",
    "$$y = \\frac{ax}{1 + bx}$$",
    "$$y = e^x$$",
    "$$y = \\sin(x)$$"
  ],
  answer: 1,
  explanation: "This is the Michaelis–Menten form ⇒ used for saturating growth with asymptote."
},
{
  text: "Which mathematical property is crucial when using models to predict future behavior?",
  choices: [
    "Periodicity",
    "Sensitivity to initial conditions",
    "Determinism and stability",
    "Symmetry"
  ],
  answer: 2,
  explanation: "Deterministic and stable systems yield reliable predictions over time."
},
{
  text: "In resource management models, a renewable resource is one that:",
  choices: [
    "Has a fixed stock",
    "Cannot be depleted",
    "Regenerates naturally over time",
    "Is nonbiological only"
  ],
  answer: 2,
  explanation: "Renewable resources (e.g. forests, fish) are replenished over time, often modeled with logistic dynamics."
},
{
  text: "Which modeling approach is most appropriate when data is limited and uncertain?",
  choices: [
    "Deterministic PDEs",
    "Monte Carlo simulation or stochastic models",
    "Exact analytic modeling",
    "Linearization only"
  ],
  answer: 1,
  explanation: "Stochastic and Monte Carlo methods capture uncertainty and probabilistic variability."
},
{
  text: "Which equation typically models radioactive decay?",
  choices: [
    "$$\\frac{dN}{dt} = -\\lambda N$$",
    "$$\\frac{dN}{dt} = \\lambda$$",
    "$$N'' + \\lambda N = 0$$",
    "$$N = \\lambda t^2$$"
  ],
  answer: 0,
  explanation: "Radioactive decay follows first-order exponential decay law."
},
{
  text: "A model using a recurrence relation is inherently:",
  choices: [
    "Continuous in time",
    "Stochastic",
    "Discrete",
    "Algebraic"
  ],
  answer: 2,
  explanation: "Recurrence relations define discrete sequences ⇒ often in time-step or generational models."
},{
  text: "In the SIR model, which term represents the rate at which individuals move from susceptible to infected?",
  choices: [
    "$$\\gamma I$$",
    "$$\\beta SI$$",
    "$$\\alpha S$$",
    "$$\\delta R$$"
  ],
  answer: 1,
  explanation: "The infection term is $$\\beta SI$$ ⇒ depends on contact rate between susceptible and infected."
},
{
  text: "Which assumption is made in the basic SIR epidemic model?",
  choices: [
    "Birth and death are included",
    "Population mixes homogeneously",
    "Immunity decreases over time",
    "Only recovered individuals can transmit disease"
  ],
  answer: 1,
  explanation: "The classical SIR model assumes every individual has equal chance of interacting with others (homogeneous mixing)."
},
{
  text: "A Cobb–Douglas production function is typically of the form:",
  choices: [
    "$$P = aL + bK$$",
    "$$P = aL^bK^c$$",
    "$$P = a + L + K$$",
    "$$P = L^2 + K^2$$"
  ],
  answer: 1,
  explanation: "Cobb–Douglas models output with inputs labor (L) and capital (K) via a multiplicative power law."
},
{
  text: "In network modeling, a node with a high degree centrality:",
  choices: [
    "Has minimal influence",
    "Is connected to few nodes",
    "Connects to many other nodes directly",
    "Appears only in isolated subgraphs"
  ],
  answer: 2,
  explanation: "Degree centrality measures the number of direct connections a node has ⇒ important for transmission dynamics."
},
{
  text: "Which function best models diminishing marginal returns?",
  choices: [
    "$$f(x) = ax^2$$",
    "$$f(x) = a \\ln(x + 1)$$",
    "$$f(x) = a e^{bx}$$",
    "$$f(x) = \\sin(x)$$"
  ],
  answer: 1,
  explanation: "Logarithmic growth reflects rapid initial increase that slows over time — classic in economics."
},
{
  text: "In an agent-based model, the system behavior emerges from:",
  choices: [
    "Global equilibrium equations",
    "Sum of stochastic effects",
    "Individual interactions and rule-based decisions",
    "Continuous PDE simulations"
  ],
  answer: 2,
  explanation: "Agents follow rules and interact; overall behavior arises from many local, decentralized processes."
},
{
  text: "Which approach is often used for modeling disease spread in networks?",
  choices: [
    "Separation of variables",
    "Graph-theoretic dynamics on contact graphs",
    "Laplace transforms",
    "Homogeneous PDEs"
  ],
  answer: 1,
  explanation: "Graph-based models simulate transmission over structured populations (nodes and edges)."
},
{
  text: "In a supply–demand economic model, equilibrium occurs when:",
  choices: [
    "Demand exceeds supply",
    "Price is zero",
    "Supply equals demand",
    "Demand becomes infinite"
  ],
  answer: 2,
  explanation: "At market equilibrium, supply and demand curves intersect ⇒ system is stable."
},
{
  text: "What does a basic compartment model assume about individuals in the same compartment?",
  choices: [
    "They are from different populations",
    "They behave randomly",
    "They are homogeneous with respect to modeled variable",
    "They do not interact with other compartments"
  ],
  answer: 2,
  explanation: "Compartments assume homogeneity ⇒ same rates and properties within each group."
},
{
  text: "In modeling data-driven networks, which quantity indicates the importance of a node in facilitating shortest paths?",
  choices: [
    "Eigenvector centrality",
    "Betweenness centrality",
    "Clustering coefficient",
    "Local density"
  ],
  answer: 1,
  explanation: "Betweenness measures how often a node lies on shortest paths between others ⇒ a sign of influence or control."
},{
  text: "In climate modeling, which factor is typically included to account for human influence?",
  choices: [
    "Solar radiation only",
    "Natural ocean cycles",
    "Greenhouse gas emissions like CO₂",
    "Plate tectonic motion"
  ],
  answer: 2,
  explanation: "Human activity (e.g. burning fossil fuels) introduces greenhouse gases ⇒ affects heat balance and temperature dynamics."
},
{
  text: "In a coupled system of equations representing predator-prey dynamics, what is one likely property?",
  choices: [
    "Each variable evolves independently",
    "Prey growth is unaffected by predators",
    "The prey equation includes a negative interaction term with predators",
    "No parameters are required"
  ],
  answer: 2,
  explanation: "Prey equation often includes $$-a x y$$ where $$x$$ is prey and $$y$$ is predator — interaction decreases prey."
},
{
  text: "Which of the following behaviors suggests a bistable system in modeling?",
  choices: [
    "Single equilibrium point",
    "Cyclic oscillations",
    "The system settles into one of two stable states depending on initial conditions",
    "No steady state"
  ],
  answer: 2,
  explanation: "Bistability occurs when two stable equilibria exist and the system can 'lock into' either depending on conditions."
},
{
  text: "In modeling materials under stress, Hooke’s law represents:",
  choices: [
    "Nonlinear deformation",
    "Elastic response proportional to applied force",
    "Plastic deformation threshold",
    "Fluid shear behavior"
  ],
  answer: 1,
  explanation: "Hooke’s law: $$F = kx$$ ⇒ force proportional to displacement ⇒ linear elasticity."
},
{
  text: "Which assumption is often made in basic population models for simplicity?",
  choices: [
    "Infinite lifespan",
    "No immigration or emigration",
    "Time-varying parameters",
    "Cyclic seasonal impact"
  ],
  answer: 1,
  explanation: "Closed population assumption ⇒ only birth/death; no entry or exit."
},
{
  text: "In epidemiological models, latency period is included by adding which compartment?",
  choices: [
    "S (Susceptible)",
    "E (Exposed)",
    "I (Infectious)",
    "R (Removed)"
  ],
  answer: 1,
  explanation: "SEIR model includes 'E' to capture individuals infected but not yet infectious (incubation stage)."
},
{
  text: "Which term in a dynamic system causes 'damping' or dissipation of energy?",
  choices: [
    "A purely reactive force",
    "A term proportional to displacement",
    "A term proportional to velocity with negative coefficient",
    "A constant input"
  ],
  answer: 2,
  explanation: "Damping force: $$-bv$$ slows the system ⇒ dissipates energy over time."
},
{
  text: "In environmental modeling, feedback loops are important because they:",
  choices: [
    "Always stabilize the model",
    "Introduce randomness",
    "Capture how changes reinforce or suppress themselves",
    "Are only needed in deterministic systems"
  ],
  answer: 2,
  explanation: "Positive/negative feedbacks are key in system behavior ⇒ e.g. ice–albedo feedback."
},
{
  text: "In modeling tumor growth, a Gompertz model is often used because:",
  choices: [
    "It grows linearly with time",
    "It has a sharp threshold for metastasis",
    "It models saturation of growth rate as the tumor matures",
    "It requires stochastic equations"
  ],
  answer: 2,
  explanation: "Gompertz growth captures rapid early proliferation followed by slowing as tumors reach size limits."
},
{
  text: "What does it mean for a model to be 'underdetermined'?",
  choices: [
    "It has more equations than variables",
    "It has no parameters",
    "There are multiple solutions due to insufficient constraints",
    "It can only be solved numerically"
  ],
  answer: 2,
  explanation: "Underdetermined systems lack enough constraints ⇒ infinite possible solutions."
},{
  text: "In an optimization model, the objective function is:",
  choices: [
    "An equation representing total constraints",
    "A function to be minimized or maximized",
    "A variable parameter",
    "A random process"
  ],
  answer: 1,
  explanation: "Objective functions define what’s being optimized — cost, profit, efficiency, etc."
},
{
  text: "Which constraint is common in a linear programming model?",
  choices: [
    "Nonlinear relationship between variables",
    "Probabilistic bounds",
    "Inequality or equality on decision variables",
    "Random fluctuations"
  ],
  answer: 2,
  explanation: "Typical constraints are linear inequalities/equalities representing resource limits or requirements."
},
{
  text: "In modeling consumer behavior, a utility function represents:",
  choices: [
    "Energy transfer",
    "Effort required",
    "Satisfaction or preference",
    "Monetary value only"
  ],
  answer: 2,
  explanation: "Utility functions quantify preferences; often used in economics to model rational choices."
},
{
  text: "Which of the following best defines a feasible region?",
  choices: [
    "All points minimizing a function",
    "All solutions violating some constraints",
    "Set of points satisfying all model constraints",
    "A non-numerical range"
  ],
  answer: 2,
  explanation: "Feasible region includes all potential solutions allowed by the model’s constraints."
},
{
  text: "In a constrained optimization problem, if no feasible solution exists:",
  choices: [
    "Use nonlinear regression",
    "Use random initial guesses",
    "The model must be re-examined or relaxed",
    "Use a discrete model"
  ],
  answer: 2,
  explanation: "Infeasibility means conflicting constraints ⇒ model must be revised or relaxed logically."
},
{
  text: "In cost minimization under production limits, the variables are usually:",
  choices: [
    "Independent constants",
    "Decision variables representing quantities produced",
    "Prices of materials",
    "External parameters only"
  ],
  answer: 1,
  explanation: "Decision variables define the quantities to optimize while staying within constraints."
},
{
  text: "Which of the following models uncertainty explicitly?",
  choices: [
    "Deterministic ODE model",
    "Linear regression without noise",
    "Stochastic process like Markov chains or Monte Carlo",
    "Simple algebraic equations"
  ],
  answer: 2,
  explanation: "Stochastic models incorporate randomness — suitable for probabilistic systems or noisy data."
},
{
  text: "A global minimum differs from a local minimum in that:",
  choices: [
    "It is the smallest value among all possible candidates",
    "It only exists in linear models",
    "It depends on initialization",
    "It occurs infinitely often"
  ],
  answer: 0,
  explanation: "Global minimum is the absolute lowest value ⇒ unlike local, it dominates over entire feasible space."
},
{
  text: "What is shadow pricing in linear optimization?",
  choices: [
    "Cost of violating a constraint",
    "Lagrange multiplier linked to each constraint",
    "Random price fluctuation",
    "Base cost before constraint applied"
  ],
  answer: 1,
  explanation: "Shadow prices measure how much the objective would improve if a constraint is slightly relaxed."
},
{
  text: "Which term refers to the process of checking how small changes in parameters affect model output?",
  choices: [
    "Regression fitting",
    "Stability analysis",
    "Sensitivity analysis",
    "Boundary testing"
  ],
  answer: 2,
  explanation: "Sensitivity analysis tests model robustness against uncertainty in data or assumptions."
},{
  text: "In a dynamic system model, stability typically refers to:",
  choices: [
    "Growth over time",
    "Sensitivity to inputs",
    "Return to equilibrium after small disturbances",
    "Absence of nonlinearities"
  ],
  answer: 2,
  explanation: "Stability implies that the system tends to return to an equilibrium state after perturbation."
},
{
  text: "A Markov chain is appropriate for modeling:",
  choices: [
    "Deterministic trends only",
    "Non-time-dependent systems",
    "Processes with memory of past states",
    "Processes where the next state depends only on current state"
  ],
  answer: 3,
  explanation: "Markov processes are memoryless ⇒ transitions depend only on current state."
},
{
  text: "Which term describes a system whose parameters change over time?",
  choices: [
    "Autonomous system",
    "Linear time-invariant",
    "Time-varying system",
    "Passive system"
  ],
  answer: 2,
  explanation: "Time-varying systems have explicit time dependence in parameters or structure."
},
{
  text: "Which modeling choice introduces delay effects in a system?",
  choices: [
    "Adding noise",
    "Including higher-order derivatives",
    "Using delay differential equations",
    "Assuming constant inputs"
  ],
  answer: 2,
  explanation: "Delay differential equations (DDEs) incorporate time lags explicitly in dynamics."
},
{
  text: "Which term refers to a collection of simulated outputs from varying inputs?",
  choices: [
    "Feasibility set",
    "Monte Carlo ensemble",
    "Phase space",
    "Limit cycle"
  ],
  answer: 1,
  explanation: "Monte Carlo methods use random input sampling to produce output ensembles."
},
{
  text: "In regression modeling, multicollinearity means:",
  choices: [
    "Model has nonlinear terms",
    "Too many observations",
    "Predictor variables are highly correlated",
    "Data has missing entries"
  ],
  answer: 2,
  explanation: "Multicollinearity inflates variance and makes coefficient estimates unstable."
},
{
  text: "Which of the following is a sign of overfitting a model?",
  choices: [
    "High bias on training data",
    "Poor performance on unseen (test) data",
    "Model simplicity",
    "Small prediction interval"
  ],
  answer: 1,
  explanation: "Overfitting fits training data too closely but generalizes poorly to new data."
},
{
  text: "A Lyapunov function in a model is used to:",
  choices: [
    "Estimate computational complexity",
    "Find parameter values",
    "Prove stability or convergence of system",
    "Add damping to the solution"
  ],
  answer: 2,
  explanation: "Lyapunov functions are mathematical tools to verify stability of equilibria."
},
{
  text: "In a system with feedback control, the purpose of feedback is to:",
  choices: [
    "Introduce error",
    "Stabilize or regulate the output",
    "Add randomness",
    "Eliminate the need for modeling"
  ],
  answer: 1,
  explanation: "Feedback compares output with a target and adjusts the input to reach or maintain desired behavior."
},
{
  text: "Which modeling method is most suited to simulate the spread of wildfire?",
  choices: [
    "Ordinary differential equation",
    "Cellular automaton or spatial grid models",
    "Linear regression",
    "Markov decision process"
  ],
  answer: 1,
  explanation: "Spatial models like cellular automata simulate fire spread across a grid of interacting cells."
}
  // يمكنك إضافة المزيد من الأسئلة هنا بنفس النمط
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreContainer = document.getElementById("score-container");
const explanationEl = document.getElementById("explanation");

function showQuestion() {
  nextBtn.disabled = true;
  explanationEl.innerHTML = "";
  const q = questions[currentQuestionIndex];
  questionEl.innerHTML = q.text;
  choicesEl.innerHTML = "";

  q.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerHTML = choice; // استخدم innerHTML لعرض المعادلات
    btn.onclick = () => selectChoice(btn, idx, q.answer, q.explanation);
    choicesEl.appendChild(btn);
  });

  MathJax.typeset();
}

function selectChoice(btn, idx, correctIdx, explanation) {
  const buttons = choicesEl.querySelectorAll(".choice-btn");
  buttons.forEach(el => el.disabled = true);

  if (idx === correctIdx) {
    btn.classList.add("selected");
    score++;
    nextBtn.disabled = false;
    explanationEl.innerHTML = explanation;
    MathJax.typeset();
  } else {
    btn.style.backgroundColor = "#fdd";
    btn.style.borderColor = "red";

    setTimeout(() => {
      buttons.forEach(el => {
        el.disabled = false;
        el.classList.remove("selected");
        el.style.backgroundColor = "";
        el.style.borderColor = "";
      });
    }, 1000);
  }
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.textContent = "";
  restartBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
  showQuestion();
});

function showScore() {
  questionEl.textContent = "Quiz Finished!";
  choicesEl.innerHTML = "";
  explanationEl.innerHTML = "";
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
  scoreContainer.textContent = `Your score: ${score} out of ${questions.length}`;
}

showQuestion();