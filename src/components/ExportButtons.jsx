import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

export const ExportButtons = ({ data }) => {
  const handleCSV = () => {
    if (!data || data.length === 0) return

    const csv = [Object.keys(data[0]).join(","), ...data.map((row) => Object.values(row).join(","))].join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "report.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  const handlePDF = () => {
    const doc = new jsPDF()
    doc.text("ReLife Admin Report", 14, 16)
    autoTable(doc, {
      head: [Object.keys(data[0])],
      body: data.map((row) => Object.values(row)),
    })
    doc.save("report.pdf")
  }

  return (
    <div className="flex gap-4 mt-4">
      <button
        className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        onClick={handleCSV}
      >
        Download CSV
      </button>
      <button
        className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        onClick={handlePDF}
      >
        Download PDF
      </button>
    </div>
  )
}
